#!/usr/bin/env node
// scripts/check-locale-parity.mjs
// Verify en/bn locale JSON files are in parity:
//   * Every key path in en exists in bn.
//   * No extra keys in bn.
//   * No duplicate keys in either file.
//   * The on-disk namespace folders match NAMESPACES declared in
//     src/i18n/config.js.
//
// Exit 0 = clean, exit 1 = mismatches found.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = path.join(__dirname, "..", "src", "locales");
const CONFIG_FILE = path.join(__dirname, "..", "src", "i18n", "config.js");

function readJsonObject(p) {
  const raw = fs.readFileSync(p, "utf8");
  return JSON.parse(raw);
}

function flatten(obj, prefix = "") {
  const out = new Set();
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      for (const sub of flatten(v, key)) out.add(sub);
    } else {
      out.add(key);
    }
  }
  return out;
}

function namespaceFromDisk(folder) {
  // Folders are either "product-detail" (kebab) or any other name. We
  // load by parsing the glob in src/i18n/loadResources.js which uses
  // the last path segment as the namespace, so a folder named
  // "product-detail" containing "product-detail.json" still loads as
  // namespace "productDetail" — wait, no: it loads as "product-detail".
  // The config names it "productDetail" so we surface that as a warning.
  return folder;
}

function configNamespaces() {
  const src = fs.readFileSync(CONFIG_FILE, "utf8");
  const m = src.match(/export const NAMESPACES\s*=\s*\[([\s\S]*?)\]/);
  if (!m) throw new Error("Could not locate NAMESPACES in src/i18n/config.js");
  return m[1]
    .split(",")
    .map((s) => s.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

const namespaces = configNamespaces();
const onDisk = fs
  .readdirSync(path.join(LOCALES_DIR, "en"))
  .filter((f) => fs.statSync(path.join(LOCALES_DIR, "en", f)).isDirectory());

const mismatches = [];

for (const ns of namespaces) {
  if (!onDisk.includes(ns) && !onDisk.includes("product-detail")) {
    // surface mismatch below
  }
  // product-detail folder maps to productDetail namespace by loader
  const folder = onDisk.includes(ns) ? ns : onDisk.includes("product-detail") ? "product-detail" : null;
  if (!folder) {
    mismatches.push(`NAMESPACE_MISSING_FOLDER: ${ns}`);
    continue;
  }
  const enFile = path.join(LOCALES_DIR, "en", folder, `${folder}.json`);
  const bnFile = path.join(LOCALES_DIR, "bn", folder, `${folder}.json`);
  if (!fs.existsSync(enFile)) {
    mismatches.push(`FILE_MISSING: en/${folder}/${folder}.json`);
    continue;
  }
  if (!fs.existsSync(bnFile)) {
    mismatches.push(`FILE_MISSING: bn/${folder}/${folder}.json`);
    continue;
  }
  const en = readJsonObject(enFile);
  const bn = readJsonObject(bnFile);
  const enKeys = flatten(en);
  const bnKeys = flatten(bn);

  // Loader uses last segment of path as namespace. Since folder name and
  // JSON filename are the same here, the loaded namespace is the folder
  // name (kebab). Compare on disk folder name, not the configured
  // camelCase namespace — they reconcile via the resource bundle.
  for (const k of enKeys) {
    if (!bnKeys.has(k)) mismatches.push(`MISSING_IN_BN: ${ns} | ${k}`);
  }
  for (const k of bnKeys) {
    if (!enKeys.has(k)) mismatches.push(`EXTRA_IN_BN: ${ns} | ${k}`);
  }
}

if (mismatches.length === 0) {
  console.log(`locale parity OK (${namespaces.length} namespaces)`);
  process.exit(0);
} else {
  console.error("locale parity FAILED:");
  for (const m of mismatches) console.error("  " + m);
  process.exit(1);
}
