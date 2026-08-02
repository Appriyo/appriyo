#!/usr/bin/env node
// scripts/check-i18n-runtime.mjs
//
// Fast i18n sanity check that runs in Node — no browser, no Puppeteer.
// Importing src/i18n/config.js is enough to validate the SUPPORTED_LANGUAGES
// → on-disk folder mapping and the namespace registration. The locale
// JSON parity check is delegated to scripts/check-locale-parity.mjs so
// both can be run independently.
//
// We use a regex-based extraction of the SUPPORTED_LANGUAGES array
// because config.js exports a plain JS literal — full ESM evaluation
// would require path aliases that don't work in a Node script.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = path.join(__dirname, "..", "src", "locales");
const CONFIG_FILE = path.join(__dirname, "..", "src", "i18n", "config.js");

function extractStringArray(source, name) {
  const match = source.match(new RegExp(`export const ${name}\\s*=\\s*\\[([\\s\\S]*?)\\]`));
  if (!match) throw new Error(`Could not locate ${name} in src/i18n/config.js`);
  return match[1]
    .split(",")
    .map((s) => s.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function extractObject(source, name) {
  const match = source.match(new RegExp(`export const ${name}\\s*=\\s*\\{([\\s\\S]*?)\\}`));
  if (!match) throw new Error(`Could not locate ${name} in src/i18n/config.js`);
  const out = {};
  const re = /(\w+)\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(match[1])) !== null) out[m[1]] = m[2];
  return out;
}

const configSrc = fs.readFileSync(CONFIG_FILE, "utf8");
const namespaces = extractStringArray(configSrc, "NAMESPACES");
const ns2folder = extractObject(configSrc, "NAMESPACE_TO_FOLDER");

// SUPPORTED_LANGUAGES is an array of objects, so we can't pull the
// codes out of the same regex. Read the array and pick the code of
// each entry.
const slMatch = configSrc.match(/export const SUPPORTED_LANGUAGES\s*=\s*\[([\s\S]*?)\];/);
if (!slMatch) throw new Error("Could not locate SUPPORTED_LANGUAGES");
const langCodes = [];
for (const m of slMatch[1].matchAll(/code:\s*["']([^"']+)["']/g)) langCodes.push(m[1]);

const errors = [];

// 1. Every language in SUPPORTED_LANGUAGES has a folder on disk.
for (const code of langCodes) {
  const folder = path.join(LOCALES_DIR, code);
  if (!fs.existsSync(folder)) errors.push(`LANGUAGE_MISSING_FOLDER: ${code}/`);
}

// 2. Every namespace maps to a folder that exists on disk for every language.
for (const ns of namespaces) {
  const folder = ns2folder[ns];
  if (!folder) {
    errors.push(`NAMESPACE_UNMAPPED: ${ns} (no NAMESPACE_TO_FOLDER entry)`);
    continue;
  }
  for (const code of langCodes) {
    const file = path.join(LOCALES_DIR, code, folder, `${folder}.json`);
    if (!fs.existsSync(file)) errors.push(`FILE_MISSING: ${code}/${folder}/${folder}.json`);
  }
}

// 3. Defer to the parity check for key-by-key validation.
console.log("→ running locale parity check…");
try {
  execFileSync(process.execPath, [path.join(__dirname, "check-locale-parity.mjs")], {
    stdio: "inherit",
  });
} catch (err) {
  errors.push("locale parity check failed (see output above)");
}

if (errors.length === 0) {
  console.log(
    `i18n runtime OK (${langCodes.length} languages, ${namespaces.length} namespaces)`,
  );
  process.exit(0);
} else {
  console.error("i18n runtime FAILED:");
  for (const e of errors) console.error("  " + e);
  process.exit(1);
}
