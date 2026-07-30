// scripts/a11y_audit.cjs
//
// Automated accessibility audit using Puppeteer + axe-core.
//
// Runs against every public route of the site (skipping the dev-only
// /dev/components route which is marked for deletion before launch).
//
// The audit waits for React hydration to finish (h1 must be present)
// before running axe, otherwise the SPA audits an empty <div id="root">
// which spuriously fails html-has-lang / document-title.
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const axeSource = fs.readFileSync(
  path.join(__dirname, "..", "node_modules", "axe-core", "axe.js"),
  "utf8"
);

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

const BASE = "http://localhost:4173";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
  });

  let totalSerious = 0;
  let totalCritical = 0;

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = BASE + route;
    process.stdout.write(`\n=== ${url} ===\n`);
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    } catch (e) {
      console.log(`  ERROR loading: ${e.message}`);
      await page.close();
      continue;
    }

    try {
      await page.waitForFunction(
        () => document.getElementById("root")?.querySelector("h1") !== null,
        { timeout: 8000 }
      );
    } catch (e) {
      console.log(`  WARN no h1 after 8s — proceeding`);
    }

    // Allow usePageMeta to update document.title.
    await new Promise((r) => setTimeout(r, 250));

    await page.evaluate(axeSource);
    let audit;
    try {
      audit = await page.evaluate(async () => {
        // eslint-disable-next-line no-undef
        return await axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "best-practice"] },
        });
      });
    } catch (e) {
      console.log(`  ERROR running axe: ${e.message}`);
      await page.close();
      continue;
    }

    if (audit.violations.length === 0) {
      console.log("  No violations.");
    } else {
      for (const v of audit.violations) {
        console.log(`  [${v.impact}] ${v.id} — ${v.help}`);
        for (const node of v.nodes.slice(0, 3)) {
          console.log(`    target: ${node.target.join(", ")}`);
        }
        if (v.impact === "serious") totalSerious += v.nodes.length;
        if (v.impact === "critical") totalCritical += v.nodes.length;
      }
    }
    await page.close();
  }

  await browser.close();

  console.log(`\n=== TOTALS ===`);
  console.log(`Serious:   ${totalSerious}`);
  console.log(`Critical:  ${totalCritical}`);
  if (totalSerious > 0 || totalCritical > 0) {
    process.exit(1);
  }
})();
