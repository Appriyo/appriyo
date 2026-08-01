// src/i18n/index.js
// The single entry point that bootstraps i18next for the entire app.
//
// Import this file ONCE (we do it from src/main.jsx). Importing it
// anywhere else is a bug — multiple init calls would race the
// LanguageDetector and clobber the saved preference.
//
// What this file owns:
//   * Constructing the i18next instance with our config.
//   * Plugging in the browser language detector (with localStorage).
//   * Loading every translation resource from src/locales/.
//   * Applying a few quality-of-life defaults (noSuspense, no freeze).
//   * Re-applying resources on Vite HMR so editing a JSON file updates
//     the UI without a full reload.

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {
  DEFAULT_LANGUAGE,
  FALLBACK_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  NAMESPACES,
  SUPPORTED_LANGUAGES,
  resolveLanguage,
} from "./config";
import { buildResources } from "./loadResources";

/**
 * Marker attached to `globalThis` so the second call (which can happen
 * during Fast Refresh's module re-evaluation) becomes a no-op instead of
 * clobbering the live instance. See initOrReturnExisting() below.
 */
const INIT_FLAG = Symbol.for("appriyo.i18n.initialized");

/**
 * Detects the user's initial language preference. Order of precedence:
 *   1. localStorage (LANGUAGE_STORAGE_KEY) — set by the language switcher.
 *   2. The browser's navigator.language, normalised via resolveLanguage().
 *   3. DEFAULT_LANGUAGE.
 *
 * Doing this in a single function (instead of letting i18next's
 * LanguageDetector run async) means React components rendered on the
 * very first paint already see the correct language and don't flicker
 * from English → Bangla.
 */
function detectInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      return saved;
    }
  } catch {
    // localStorage can throw in privacy modes / sandboxed iframes.
    // Fall through to navigator detection.
  }

  const navLang =
    window.navigator?.language ||
    window.navigator?.userLanguage ||
    window.navigator?.browserLanguage;
  return resolveLanguage(navLang);
}

/**
 * Returns the existing i18n instance if this module has already been
 * evaluated (HMR), or initialises a fresh one. We attach the marker to
 * `globalThis` so module duplication — Vite's Fast Refresh sometimes
 * re-evaluates the same module twice — can't trigger double init.
 */
function initOrReturnExisting() {
  if (globalThis[INIT_FLAG]) return i18n;

  i18n
    // React adapter: lets us call useTranslation() in components.
    .use(initReactI18next)
    // localStorage / cookie / navigator language detection.
    .use(LanguageDetector)
    .init({
      // Resources are loaded eagerly via the glob in loadResources.js —
      // no async backend needed, so the first render already has the
      // correct strings and we don't need React.Suspense around text.
      resources: buildResources(),

      // Synchronous init: useTranslation() returns strings on the first
      // render. If we ever introduce async loading (e.g. chunked locales
      // fetched from a CDN), flip these to true and wrap App in <Suspense>.
      react: {
        useSuspense: false,
      },

      // The detection chain. Order matters: localStorage first so an
      // explicit user choice always wins over the browser default.
      detection: {
        order: ["localStorage", "navigator"],
        lookupLocalStorage: LANGUAGE_STORAGE_KEY,
        // We never want i18next to set a cookie — Appriyo has no auth
        // yet and cookies would leak preference across subdomains.
        lookupCookie: undefined,
        caches: ["localStorage"],
      },

      lng: detectInitialLanguage(),
      fallbackLng: FALLBACK_LANGUAGE,

      // Make the supported-languages list the source of truth. Anything
      // outside it falls back to English.
      supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
      nonExplicitSupportedLngs: true,

      // Register every namespace up front. i18next will lazy-load the
      // JSON anyway, but preloading avoids a microtask where a component
      // first renders with the key string instead of the translation.
      ns: NAMESPACES,
      defaultNS: "common",
      fallbackNS: "common",

      // Useful in dev; i18next defaults to console.warn which is fine.
      saveMissing: import.meta.env.DEV,
      missingKeyHandler: import.meta.env.DEV
        ? (lngs, ns, key) => {
            console.warn(`[i18n] missing translation: ${lngs.join(",")} | ${ns} | ${key}`);
          }
        : undefined,

      // Stable, human-readable keys in the rendered HTML (no array
      // indexes leaking through). Defaults are sensible, listed for
      // documentation.
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",

      interpolation: {
        // React already escapes interpolated values; turning off
        // i18next's escaping prevents double-escaping (&amp; → &amp;amp;).
        escapeValue: false,
      },

      // Keep returnEmptyString on so component authors can opt in to
      // rendering nothing for missing keys without throwing.
      returnEmptyString: false,
      returnNull: false,

      // Compatibility shims for older i18next consumers.
      compatibilityJSON: "v4",
    });

  globalThis[INIT_FLAG] = true;
  return i18n;
}

const i18nInstance = initOrReturnExisting();

/**
 * Vite HMR: when a translation JSON file changes, Vite invalidates this
 * module. We re-read the resources from disk via the same glob and merge
 * them into the live instance — no app reload required.
 *
 * Why not just `i18n.addResources` per file? Because re-running
 * buildResources() picks up brand-new JSON files that didn't exist when
 * the page first loaded (e.g. the dev just created src/locales/bn/home/home.json).
 */
if (import.meta.hot) {
  import.meta.hot.accept(["./loadResources", "./config"], () => {
    const fresh = buildResources();
    for (const [lng, namespaces] of Object.entries(fresh)) {
      for (const [ns, value] of Object.entries(namespaces)) {
        // `replace` is gentler than `addResources` because it preserves
        // any keys the dev hasn't touched yet. i18next picks up the new
        // bundle synchronously and re-renders subscribers.
        i18nInstance.removeResourceBundle(lng, ns);
        i18nInstance.addResourceBundle(lng, ns, value, true, true);
      }
    }
    // Force a re-render in any component that reads the active language
    // so language-switcher labels etc. update too.
    i18nInstance.changeLanguage(i18nInstance.resolvedLanguage);
  });
}

export default i18nInstance;
