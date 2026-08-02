#!/usr/bin/env node
// scripts/check-locale-parity.mjs
//
// Verify en/bn locale JSON files are in parity:
//   * Every key path in en exists in bn.
//   * No extra keys in bn.
//   * No duplicate keys in either file.
//   * The on-disk namespace folders match the NAMESPACE_TO_FOLDER
//     export from src/i18n/config.js — single source of truth.
//
// Exit 0 = clean, exit 1 = mismatches found.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = path.join(__dirname, "..", "src", "locales");
const CONFIG_FILE = path.join(__dirname, "..", "src", "i18n", "config.js");

function readJsonObject(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

/**
 * Flatten a JSON object to a Map of leaf paths → found-at-count.
 * Using a Map (not a Set) lets us detect duplicate keys within a file
 * — two array entries with the same object key would otherwise pass.
 *
 * Arrays are flattened as `items.0`, `items.1`, … so the parity check
 * can catch "extra item in en" or "missing item in bn" too.
 */
function flattenWithCount(obj, prefix = "", counts = new Map()) {
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    counts.set(key, (counts.get(key) ?? 0) + 1);
    if (v && typeof v === "object" && !Array.isArray(v)) {
      flattenWithCount(v, key, counts);
    }
  }
  return counts;
}

/**
 * Parse the NAMESPACE_TO_FOLDER constant from src/i18n/config.js. We
 * use a tolerant regex-based walker because the source is a plain JS
 * object literal — introducing a Babel parser would be overkill for
 * a CI script.
 */
function parseConfigTable() {
  const src = fs.readFileSync(CONFIG_FILE, "utf8");
  const match = src.match(/export const NAMESPACE_TO_FOLDER\s*=\s*\{([\s\S]*?)\}/);
  if (!match) throw new Error("Could not locate NAMESPACE_TO_FOLDER in src/i18n/config.js");
  const table = {};
  const body = match[1];
  const re = /(\w+)\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    table[m[1]] = m[2];
  }
  return table;
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

const ns2folder = parseConfigTable();
const namespaces = configNamespaces();

const onDisk = fs
  .readdirSync(path.join(LOCALES_DIR, "en"))
  .filter((f) => fs.statSync(path.join(LOCALES_DIR, "en", f)).isDirectory());

const mismatches = [];

// 1. Every namespace in NAMESPACES must have a folder mapping.
for (const ns of namespaces) {
  if (!ns2folder[ns]) {
    mismatches.push(`NAMESPACE_UNMAPPED: ${ns} (no entry in NAMESPACE_TO_FOLDER)`);
  }
}

// 2. Every namespace must have a folder on disk.
for (const ns of namespaces) {
  const folder = ns2folder[ns];
  if (!folder) continue;
  if (!onDisk.includes(folder)) {
    mismatches.push(`NAMESPACE_MISSING_FOLDER: ${ns} → ${folder}/`);
  }
}

// 3. Parity + duplicate-key check for each namespace.
for (const ns of namespaces) {
  const folder = ns2folder[ns];
  if (!folder) continue;
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
  const en = flattenWithCount(readJsonObject(enFile));
  const bn = flattenWithCount(readJsonObject(bnFile));

  for (const [k, count] of en) {
    if (count > 1) mismatches.push(`DUPLICATE_IN_EN: ${ns} | ${k} (×${count})`);
    if (!bn.has(k)) mismatches.push(`MISSING_IN_BN: ${ns} | ${k}`);
  }
  for (const [k, count] of bn) {
    if (count > 1) mismatches.push(`DUPLICATE_IN_BN: ${ns} | ${k} (×${count})`);
    if (!en.has(k)) mismatches.push(`EXTRA_IN_BN: ${ns} | ${k}`);
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
