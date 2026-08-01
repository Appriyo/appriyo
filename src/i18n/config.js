// src/i18n/config.js
// Central configuration shared by the i18n runtime and any tooling that
// needs to enumerate supported languages (e.g. the language switcher).
//
// Keeping these in a dedicated module means:
//   * Adding a new language is a single-file change in src/locales/<lng>/
//     plus an entry in SUPPORTED_LANGUAGES below — no scattered constants.
//   * Other modules (hooks, components, tests) can import this file
//     without pulling in i18next as a side effect.

/**
 * Canonical list of supported languages, in display order.
 *
 * `code` is the BCP-47-ish code used by i18next, in localStorage, and in
 * URLs. `label` is the human-readable name shown in language pickers and
 * rendered in its own language ("বাংলা" not "Bangla") so users always
 * recognise their own language regardless of the active UI language.
 * `dir` is the writing direction — Appriyo is currently LTR-only but the
 * field is here so RTL languages can be added later without refactoring.
 * `flag` is an optional emoji shown next to the label; omit if you prefer
 * a text-only switcher.
 *
 * To add a new language:
 *   1. Create src/locales/<code>/ with the same namespace JSON files as
 *      src/locales/en/.
 *   2. Add an entry here.
 *   3. Update FALLBACK_LANGUAGE only if English should no longer be the
 *      fallback for this language.
 *   That's it — the loader in src/i18n/loadResources.js auto-discovers
 *   every JSON file under src/locales/<code>/.
 */
export const SUPPORTED_LANGUAGES = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    dir: "ltr",
    flag: "🇬🇧",
  },
  {
    code: "bn",
    label: "Bangla",
    nativeLabel: "বাংলা",
    dir: "ltr",
    flag: "🇧🇩",
  },
];

/** Fallback used when a translation is missing in the active language. */
export const FALLBACK_LANGUAGE = "en";

/**
 * Default language used when no saved preference exists AND no browser
 * language can be matched. The language detector in i18n-browser-languagedetector
 * still inspects `navigator.language` first, so this is the last-resort
 * default — it is NOT a hard override.
 */
export const DEFAULT_LANGUAGE = "en";

/**
 * localStorage key used by the language detector. Versioned so future
 * schema migrations can invalidate stale saved preferences without
 * confusing users.
 */
export const LANGUAGE_STORAGE_KEY = "appriyo:language:v1";

/**
 * localStorage key namespace reserved for i18n-related data (date
 * formats, number formats, etc.). Kept here so future additions don't
 * reinvent the namespace.
 */
export const STORAGE_NAMESPACE = "appriyo:i18n:v1";

/**
 * Namespaces registered with i18next. Each entry corresponds to one JSON
 * file per language under src/locales/<lng>/<namespace>/<namespace>.json.
 *
 * To add a new namespace:
 *   1. Add it here.
 *   2. Create the matching JSON file in src/locales/en/, src/locales/bn/,
 *      and every other supported language.
 *   3. (Optional) Add an explicit import in src/locales/<lng>/index.js
 *      so editors surface the file in "Find references".
 */
export const NAMESPACES = [
  "common",
  "navigation",
  "layout",
  "home",
  "services",
  "solutions",
  "products",
  "productDetail",
  "about",
  "contact",
  "metadata",
  "legal",
  "errors",
];

/** Convenience map: language code → friendly label, useful in dropdowns. */
export const LANGUAGE_LABELS = Object.fromEntries(
  SUPPORTED_LANGUAGES.map((l) => [l.code, l]),
);

/** Returns true if the given code is a supported language. */
export function isSupportedLanguage(code) {
  return SUPPORTED_LANGUAGES.some((l) => l.code === code);
}

/**
 * Resolves the closest supported language for a free-form input such as
 * `navigator.language` ("en-GB", "bn-BD", etc.). Falls back to
 * DEFAULT_LANGUAGE when no match is found.
 */
export function resolveLanguage(input) {
  if (!input) return DEFAULT_LANGUAGE;
  if (isSupportedLanguage(input)) return input;
  const base = String(input).toLowerCase().split(/[-_]/)[0];
  return isSupportedLanguage(base) ? base : DEFAULT_LANGUAGE;
}
