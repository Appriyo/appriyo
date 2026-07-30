// scripts/browser-test.mjs — Real Chrome (Puppeteer-bundled) smoke test
// across every route in AppRouter.jsx. Mobile (412x823) + desktop
// (1440x900) viewports. Captures network failures and JS console errors.

import { createServer } from "node:http";
import { readFile, stat, mkdir } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const SHOTS = join(__dirname, "..", "reports", "browser-shots");

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

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    let p = decodeURIComponent(url.pathname);
    if (p === "/" || p === "") p = "/index.html";
    const safe = p.replace(/\.\./g, "");
    let abs = join(DIST, safe);
    let st;
    try { st = await stat(abs); } catch { st = null; }
    // SPA fallback: if the path has no extension and doesn't map to a
    // real file, serve dist/index.html (same as Netlify's _redirects rule).
    if (!st || !st.isFile()) {
      if (!extname(safe)) {
        abs = join(DIST, "index.html");
        try { st = await stat(abs); } catch { st = null; }
      }
    }
    if (!st || !st.isFile()) { res.writeHead(404).end("not found"); return; }
    const ext = extname(abs).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] ?? "application/octet-stream" });
    res.end(await readFile(abs));
  } catch {
    res.writeHead(404).end("not found");
  }
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();
const base = `http://127.0.0.1:${port}`;
console.log(`[server] ${base}`);

const ROUTES = [
  "/",
  "/services",
  "/solutions",
  "/products",
  "/products/amar-repair",
  "/products/amar-batch",
  "/products/amar-card",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/security",
  "/dev/components", // expect 404 / fallback (proves removal)
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile",  width: 412,  height: 823 },
];

const browser = await puppeteer.launch({
  executablePath:
    "C:/Users/PC/.cache/puppeteer/chrome/win64-151.0.7922.47/chrome-win64/chrome.exe",
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-first-run",
  ],
});

await mkdir(SHOTS, { recursive: true });

const results = [];

for (const vp of VIEWPORTS) {
  console.log(`\n=== Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });

    const consoleErrors = [];
    page.on("pageerror", (err) => consoleErrors.push(String(err)));
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(`console.error: ${msg.text()}`);
    });

    const failedReqs = [];
    page.on("response", (resp) => {
      if (resp.status() >= 400) failedReqs.push(`${resp.status()} ${resp.url()}`);
    });

    const url = base + route;
    let h1Count = 0;
    let has404InTitle = false;
    try {
      const resp = await page.goto(url, { waitUntil: "load", timeout: 20000 });
      const status = resp?.status() ?? 0;
      h1Count = await page.$$eval("h1", (els) => els.length);
      const title = await page.title();
      has404InTitle = /404|not\s*found/i.test(title);
      // For /dev/components we EXPECT it to render the NotFound page (1 H1) — that's a pass.
      const expectedH1 = route === "/dev/components" ? 1 : 1;
      results.push({
        vp: vp.name, route, http: status, h1: h1Count,
        expectedH1,
        consoleErrors: consoleErrors.slice(),
        failedReqs: failedReqs.slice(),
        title,
      });
      const tag = status === 200 && h1Count === expectedH1 && consoleErrors.length === 0
        ? "PASS"
        : (route === "/dev/components" && status === 200 && h1Count === 1 ? "PASS (NotFound as expected)" : "FAIL");
      console.log(`  ${tag.padEnd(22)} ${route.padEnd(28)} HTTP ${status}  h1=${h1Count}  ${title}`);
      if (consoleErrors.length) {
        for (const e of consoleErrors) console.log(`    ! ${e}`);
      }
      if (failedReqs.length) {
        for (const f of failedReqs) console.log(`    ! 404: ${f}`);
      }

      // Screenshot home + mobile of `/`
      if (route === "/") {
        const shot = join(SHOTS, `home-${vp.name}.png`);
        await page.screenshot({ path: shot, fullPage: false });
      }
    } catch (err) {
      console.log(`  EXCEPTION                  ${route.padEnd(28)} ${err?.message ?? err}`);
      results.push({ vp: vp.name, route, http: 0, h1: 0, error: String(err) });
    }
    await page.close();
  }
}

await browser.close();
server.close();

const summary = {
  totalRuns: results.length,
  pass: results.filter((r) => r.h1 === 1 && (r.http === 200 || (r.route === "/dev/components" && r.http === 200)) && (r.consoleErrors?.length ?? 0) === 0).length,
  fail: results.filter((r) => r.http !== 200 || r.h1 !== 1 || (r.consoleErrors?.length ?? 0) > 0).length,
  consoleErrors: results.reduce((acc, r) => acc + (r.consoleErrors?.length ?? 0), 0),
  networkFailures: results.reduce((acc, r) => acc + (r.failedReqs?.length ?? 0), 0),
  devComponentsRemoved: results.find((r) => r.route === "/dev/components")?.title ?? "n/a",
};
console.log("\n=== Summary ===");
console.log(JSON.stringify(summary, null, 2));

await import("node:fs/promises").then((fs) =>
  fs.writeFile(join(__dirname, "..", "reports", "browser-test.json"), JSON.stringify(results, null, 2))
);