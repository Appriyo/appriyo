// scripts/lighthouse-mobile-4g.mjs — DESIGN.md §11
//
// Real Lighthouse audit using the Chrome binary bundled with Puppeteer.
// Throttling preset: lighthouse's official "mobileSlow4G" simulation
// profile (1.6 Mbps down, 750 Kbps up, 563ms TCP RTT, 4x CPU slowdown,
// mobile screen emulation). formFactor=mobile.
//
// Spins up a static server pointing at the production build (dist/),
// launches Chrome, runs the performance category only, and prints the
// metrics + writes the full JSON report.

import { createServer } from "node:http";
import { readFile, stat, mkdir } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const REPORTS = join(__dirname, "..", "reports");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".mjs":  "text/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico":  "image/x-icon",
  ".svg":  "image/svg+xml",
  ".woff2":"font/woff2",
  ".txt":  "text/plain; charset=utf-8",
};

async function startStaticServer() {
  const s = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://localhost");
      let p = decodeURIComponent(url.pathname);
      if (p === "/" || p === "") p = "/index.html";
      const safe = p.replace(/\.\./g, "");
      const abs = join(DIST, safe);
      const st = await stat(abs);
      if (!st.isFile()) { res.writeHead(404).end("not found"); return; }
      const ext = extname(abs).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME[ext] ?? "application/octet-stream" });
      res.end(await readFile(abs));
    } catch {
      res.writeHead(404).end("not found");
    }
  });
  await new Promise((r) => s.listen(0, "127.0.0.1", r));
  const { port } = s.address();
  return { server: s, port, url: `http://127.0.0.1:${port}/` };
}

const CHROME_PATH =
  "C:/Users/PC/.cache/puppeteer/chrome/win64-151.0.7922.47/chrome-win64/chrome.exe";

// Boot Chrome via chrome-launcher so Lighthouse gets a clean instance
// it can drive. chrome-launcher is the same approach the lighthouse CLI
// uses; it finds Chrome automatically but we pin the path explicitly
// since Puppeteer keeps its own copy.
const chrome = await chromeLauncher.launch({
  chromePath: CHROME_PATH,
  chromeFlags: [
    "--headless=new",
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-first-run",
  ],
});

// Start static server BEFORE driving Lighthouse at the URL — Lighthouse
// fetches the page over the network, so we want the server up.
const { server, port, url } = await startStaticServer();
console.log(`[server] listening on ${url}`);

try {
  // Run Lighthouse in "navigation" mode targeting the prod build.
  const result = await lighthouse(
    url,
    {
      port: chrome.port,
      logLevel: "error",
      output: "json",
      onlyCategories: ["performance"],
      formFactor: "mobile",
      throttlingMethod: "simulate",
      throttling: {
        // Lighthouse's built-in mobile Slow 4G preset.
        rttMs: 150,
        throughputKbps: 1.6 * 1024, // 1638.4
        requestLatencyMs: 150 * 3.75, // ~563ms proxy_download
        downloadThroughputKbps: 1.6 * 1024,
        uploadThroughputKbps: 750,
        cpuSlowdownMultiplier: 4,
      },
      screenEmulation: {
        mobile: true,
        width: 412,
        height: 823,
        deviceScaleFactor: 1.75,
        disabled: false,
      },
      emulatedUserAgent:
        "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36",
    }
  );

  const lhr = result.lhr;
  const perf = lhr.categories.performance.score * 100;
  const a11y = lhr.categories.accessibility; // may be undefined since we only ran perf
  const metrics = lhr.audits;

  // Print summary
  console.log("\n=== Lighthouse mobile+Slow 4G (simulated) — apriyo build ===");
  console.log(`Performance score : ${perf}`);
  for (const key of [
    "first-contentful-paint",
    "largest-contentful-paint",
    "cumulative-layout-shift",
    "total-blocking-time",
    "speed-index",
    "interactive",
    "server-response-time",
  ]) {
    const a = metrics[key];
    if (!a) continue;
    console.log(`${key.padEnd(28)} : ${a.displayValue ?? a.numericValue}`);
  }

  // Save the full JSON
  await mkdir(REPORTS, { recursive: true });
  const outPath = join(REPORTS, "lighthouse-mobile-4g.json");
  await import("node:fs/promises").then(fs => fs.writeFile(outPath, JSON.stringify(lhr, null, 2)));
  console.log(`\nFull report → ${outPath}`);
} catch (err) {
  console.error("Lighthouse audit failed:");
  console.error(err?.stack ?? err);
  process.exitCode = 1;
} finally {
  await chrome.kill();
  server.close();
}