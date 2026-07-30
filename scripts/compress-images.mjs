// scripts/compress-images.mjs — DESIGN.md §11 (Image size ≤150KB WebP/AVIF)
//
// Re-encodes the 4 team photos from JPEG → WebP using a headless Chrome
// driven by puppeteer (which is already in package.json). Uses the full
// Chrome binary (not the stripped-down chrome-headless-shell) because
// only the full Chrome ships the WebP encoder. Canvas.toBlob produces
// a real WebP at the chosen quality; if a result still exceeds 150KB
// we retry at lower quality until it fits.
//
// The 2 dashboard screenshots are already WebP and under the cap; this
// script only touches the team photos.

import { readdir, readFile, stat, unlink, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_TEAM = join(__dirname, "..", "public", "img", "team_img");

const MAX_BYTES = 150 * 1024;
const QUALITIES = [0.82, 0.78, 0.74, 0.7, 0.65];
const TARGET_W = 640; // reasonable for a circular avatar; sources are ~1024.

const CHROME_PATH =
  "C:/Users/PC/.cache/puppeteer/chrome/win64-151.0.7922.47/chrome-win64/chrome.exe";

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  protocolTimeout: 60000,
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600 });

  const convertOne = async (srcAbs, dstAbs, originalSize) => {
    const srcBuf = await readFile(srcAbs);

    // Hand the bytes to the page via a fresh Blob URL so we don't
    // inflate through base64 (and so the JPEG decoder in Chromium is
    // the same path real visitors use).
    const handle = await page.evaluateHandle(
      (bytes) => {
        const arr = new Uint8Array(bytes);
        const blob = new Blob([arr], { type: "image/jpeg" });
        return URL.createObjectURL(blob);
      },
      Array.from(srcBuf)
    );

    for (const q of QUALITIES) {
      const result = await page.evaluate(
        async (url, q, targetW) => {
          const img = new Image();
          img.src = url;
          await img.decode();
          let w = img.naturalWidth, h = img.naturalHeight;
          if (w > targetW) {
            h = Math.round(h * (targetW / w));
            w = targetW;
          }
          const c = document.createElement("canvas");
          c.width = w; c.height = h;
          c.getContext("2d").drawImage(img, 0, 0, w, h);
          const blob = await new Promise((r) => c.toBlob(r, "image/webp", q));
          if (!blob) return { mime: null, bytes: null };
          const buf = new Uint8Array(await blob.arrayBuffer());
          return { mime: blob.type, bytes: Array.from(buf) };
        },
        handle,
        q,
        TARGET_W
      );

      if (!result.mime) {
        throw new Error("Chrome did not produce image/webp");
      }
      const bytes = Buffer.from(result.bytes);
      const ratio = ((bytes.length / originalSize) * 100).toFixed(1);
      const pass = bytes.length <= MAX_BYTES ? "OK  " : "OVER";
      console.log(
        `  q=${q.toFixed(2)} → ${(bytes.length / 1024).toFixed(1)} KB ` +
          `(${ratio}% of source) ${pass}`
      );
      if (bytes.length <= MAX_BYTES) {
        await writeFile(dstAbs, bytes);
        return { size: bytes.length, q, w: TARGET_W };
      }
    }
    throw new Error(
      `Could not compress ${srcAbs} below ${MAX_BYTES} bytes at any quality`
    );
  };

  const entries = await readdir(PUBLIC_TEAM);
  const jpegs = entries.filter((f) => /\.(jpe?g)$/i.test(f));
  console.log(`Found ${jpegs.length} JPEG(s) to convert in ${PUBLIC_TEAM}`);
  if (jpegs.length === 0) {
    console.log("Nothing to do.");
    process.exit(0);
  }

  const results = [];
  for (const name of jpegs) {
    const srcAbs = join(PUBLIC_TEAM, name);
    const dstName = name.replace(/\.(jpe?g)$/i, ".webp");
    const dstAbs = join(PUBLIC_TEAM, dstName);
    const srcStat = await stat(srcAbs);
    console.log(`\n→ ${name}  (${(srcStat.size / 1024).toFixed(1)} KB JPEG)`);
    const r = await convertOne(srcAbs, dstAbs, srcStat.size);
    results.push({ name, src: srcStat.size, dst: r.size, q: r.q, dstName });
    console.log(`  wrote ${dstName}: ${(r.size / 1024).toFixed(1)} KB @ q=${r.q}`);
  }

  console.log("\n=== Summary ===");
  for (const r of results) {
    const ratio = (r.dst / r.src * 100).toFixed(1);
    console.log(
      `${r.dstName.padEnd(30)}  ${(r.src/1024).toFixed(1).padStart(7)} KB → ` +
        `${(r.dst/1024).toFixed(1).padStart(7)} KB (${ratio}%) q=${r.q}`
    );
  }

  console.log("\nRemoving source JPEGs…");
  for (const name of jpegs) {
    const abs = join(PUBLIC_TEAM, name);
    await unlink(abs);
    console.log(`  deleted ${name}`);
  }
} finally {
  await browser.close();
}