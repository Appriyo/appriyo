// scripts/i18n-browser-test.mjs — Verify en/bn locale switching end-to-end
// across every migrated route. Loads the production build, flips the
// language via localStorage (matching the LanguageSwitcher) and asserts
// that the rendered <h1> and <html lang> attribute actually change.

import { createServer } from "node:http";
import { readFile, stat, mkdir } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

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

await mkdir(join(__dirname, "..", "reports", "browser-shots"), { recursive: true });

const results = [];

for (const route of ROUTES) {
  for (const lng of ["en", "bn"]) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const consoleErrors = [];
    const consoleWarns = [];
    page.on("pageerror", (err) => consoleErrors.push(String(err)));
    page.on("console", (msg) => {
      const text = msg.text();
      if (msg.type() === "error") consoleErrors.push(`console.error: ${text}`);
      if (msg.type() === "warning" || msg.type() === "warn") consoleWarns.push(text);
      if (msg.type() === "warning" && /i18n/.test(text)) consoleErrors.push(`i18n warn: ${text}`);
    });

    const failedReqs = [];
    page.on("response", (resp) => {
      if (resp.status() >= 400) failedReqs.push(`${resp.status()} ${resp.url()}`);
    });

    try {
      await page.goto(base + "/", { waitUntil: "load", timeout: 20000 });
      // Set the language preference, then navigate to the route so the
      // i18next detector picks it up at the first paint.
      await page.evaluate((code) => {
        localStorage.setItem("appriyo:language:v1", code);
      }, lng);
      await page.goto(base + route, { waitUntil: "load", timeout: 20000 });

      // Give React one frame to render with the new locale.
      await new Promise((r) => setTimeout(r, 200));

      const htmlLang = await page.evaluate(() => document.documentElement.lang);
      const h1 = await page.$eval("h1", (el) => el.textContent.trim()).catch(() => "");
      const title = await page.title();
      const langOk = htmlLang === lng;
      // Brand product names (Amar Repair, Amar Batch, Amar Card) stay in
      // English in both locales per the i18n plan. For the two detail
      // pages that display only the product name as h1, English in bn is
      // expected.
      const brandH1Routes = new Set(["/products/amar-repair", "/products/amar-batch"]);
      const isBrandH1 = brandH1Routes.has(route);
      // Bangla Unicode block check on the h1 to confirm translation —
      // skip for brand-name h1s that are intentionally English.
      const hasBangla = lng === "bn" ? isBrandH1 || /[\u0980-\u09FF]/.test(h1) : true;
      const noMissingKeyWarnings = !consoleErrors.some((e) => /missing translation/i.test(e));

      const pass = langOk && hasBangla && noMissingKeyWarnings && consoleErrors.length === 0;
      results.push({
        route, lng,
        langOk, hasBangla, noMissingKeyWarnings,
        htmlLang, h1Snippet: h1.slice(0, 80),
        title: title.slice(0, 80),
        consoleErrors: consoleErrors.slice(),
        consoleWarns: consoleWarns.filter((w) => /i18n/.test(w)).slice(),
        failedReqs: failedReqs.slice(),
        pass,
      });
      console.log(`${pass ? "PASS" : "FAIL"}  ${route.padEnd(28)} lng=${lng}  lang=${htmlLang}  h1="${h1.slice(0, 40)}"`);
      if (consoleErrors.length) for (const e of consoleErrors) console.log(`    ! ${e}`);
    } catch (err) {
      console.log(`EXCEPTION  ${route.padEnd(28)} lng=${lng}  ${err?.message ?? err}`);
      results.push({ route, lng, pass: false, error: String(err) });
    }
    await page.close();
  }
}

await browser.close();
server.close();

const summary = {
  totalRuns: results.length,
  pass: results.filter((r) => r.pass).length,
  fail: results.filter((r) => !r.pass).length,
  consoleErrors: results.reduce((acc, r) => acc + (r.consoleErrors?.length ?? 0), 0),
  i18nWarns: results.reduce((acc, r) => acc + (r.consoleWarns?.length ?? 0), 0),
  networkFailures: results.reduce((acc, r) => acc + (r.failedReqs?.length ?? 0), 0),
};
console.log("\n=== i18n smoke summary ===");
console.log(JSON.stringify(summary, null, 2));

await import("node:fs/promises").then((fs) =>
  fs.writeFile(
    join(__dirname, "..", "reports", "i18n-browser-test.json"),
    JSON.stringify(results, null, 2),
  ),
);

process.exit(summary.fail > 0 ? 1 : 0);
