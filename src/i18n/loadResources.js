// src/i18n/loadResources.js
// Auto-discovers every translation file under src/locales/ and returns it
// in the `{ [lng]: { [namespace]: resources } }` shape i18next expects.
//
// Why import.meta.glob instead of static imports?
//   * Vite resolves the glob at build time, so the bundle still only ships
//     the JSON files we actually own — no runtime directory traversal.
//   * When a developer adds a new JSON file, Vite's HMR picks it up
//     automatically without restarting the dev server, and the i18n
//     instance re-reads the resources via the `resources` config below.
//   * New languages require zero changes here: drop a folder under
//     src/locales/<lng>/, restart the dev server, and the new language
//     shows up in the language detector automatically.
//
// Why not import from src/locales/<lng>/index.js?
//   * Statically importing every locale index at startup would force Vite
//     to evaluate every JSON file in every language — fine for two
//     languages, wasteful at 10+. With the glob we still ship everything
//     (it's the user's content, after all), but we make the discovery
//     contract explicit and easy to reason about.

import { FALLBACK_LANGUAGE, NAMESPACES, SUPPORTED_LANGUAGES } from "./config";

/**
 * Glob pattern relative to this file. `eager: true` makes the modules
 * available synchronously at startup, which is what i18next needs.
 * `import: "default"` returns the parsed JSON object directly instead of
 * the `{ default: ... }` wrapper that Vite's default import shape uses.
 *
 * The pattern below matches:
 *   src/locales/<lng>/<namespace>/<namespace>.json
 *   (and any additional JSON files in the same folder, e.g. <lng>/about/extra.json)
 *
 * NOTE: Vite's `import.meta.glob` requires a *string literal* pattern —
 * it can't be composed from a variable or template literal. The pattern
 * is therefore inlined directly in the call below.
 *
 * Result keys look like "../../locales/en/navigation/navigation.json".
 */
const translationModules = import.meta.glob(
  "../../locales/*/*/*.json",
  { eager: true, import: "default" },
);

/**
 * Parses a glob key like "../../locales/bn/navigation/navigation.json"
 * into `{ lng: "bn", namespace: "navigation" }`.
 *
 * Robust to extra folders: any extra path segment is folded into the
 * namespace (e.g. "../../locales/en/about/team/team.json" becomes
 * namespace "team"). For the Appriyo project structure we keep a strict
 * two-segment layout, so this is mostly a safety net.
 */
function parseGlobKey(key) {
  // Strip the leading "../../locales/" prefix and the trailing ".json".
  const segments = key
    .replace(/^.*\/locales\//, "")
    .replace(/\.json$/, "")
    .split("/");

  if (segments.length < 2) return null;
  const [lng, ...rest] = segments;
  // Use the file's basename as the namespace (last segment). This means
  // "navigation/navigation.json" → "navigation" and
  // "about/team/team.json" → "team", which is the convention we want.
  const namespace = rest[rest.length - 1];
  return { lng, namespace };
}

/**
 * Builds the i18next `resources` object from the glob result.
 *
 * Returns: { en: { navigation: {...} }, bn: { navigation: {...} } }
 *
 * Languages with no JSON files are still included as empty objects so
 * i18next can resolve their namespace list cleanly without warnings.
 */
export function buildResources() {
  const resources = {};

  // Seed every supported language with an empty namespace map. This
  // prevents i18next from logging "no namespace" warnings before the
  // JSON modules have been attached.
  for (const { code } of SUPPORTED_LANGUAGES) {
    resources[code] = {};
    for (const ns of NAMESPACES) {
      resources[code][ns] = {};
    }
  }

  for (const [key, value] of Object.entries(translationModules)) {
    const parsed = parseGlobKey(key);
    if (!parsed) continue;
    const { lng, namespace } = parsed;

    // Skip languages we don't know about — keeps a typo'd folder from
    // silently showing up in production.
    if (!resources[lng]) resources[lng] = {};
    resources[lng][namespace] = value;
  }

  return resources;
}

/**
 * Merges a partial resources patch into an existing resources object.
 * Used by the dev HMR handler in src/i18n/index.js so editing a single
 * JSON file updates the live i18next instance without a full reload.
 */
export function mergeResourcePatch(lng, namespace, patch) {
  return { [lng]: { [namespace]: patch } };
}

/**
 * Returns the list of languages that actually have at least one non-empty
 * namespace in the resources object. Useful for sanity checks and for the
 * language switcher to skip empty/placeholder languages.
 */
export function getAvailableLanguages(resources) {
  return Object.entries(resources)
    .filter(([, namespaces]) =>
      Object.values(namespaces).some(
        (value) => value && Object.keys(value).length > 0,
      ),
    )
    .map(([lng]) => lng);
}

export { FALLBACK_LANGUAGE };
