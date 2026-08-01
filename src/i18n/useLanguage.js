// src/i18n/useLanguage.js
// Re-exports react-i18next's `useTranslation` plus a thin wrapper hook
// that exposes the active language and a `setLanguage` helper that
// persists to localStorage.
//
// Why a wrapper instead of calling useTranslation everywhere?
//   * Components that only care about the current language (not the
//     translation function) shouldn't have to destructure and ignore
//     `t`. `const { language, setLanguage } = useLanguage();` reads
//     better and is harder to misuse.
//   * `setLanguage` is the only sanctioned way to change the language
//     from a component — it always persists and always validates the
//     code against SUPPORTED_LANGUAGES, so a typo can't desync
//     localStorage from i18next.

import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  FALLBACK_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
} from "./config";

/**
 * Returns:
 *   * `t`           — i18next translation function (re-export of react-i18next).
 *   * `i18n`        — the i18next instance, for advanced consumers.
 *   * `language`    — the active language code (e.g. "en").
 *   * `languages`   — the SUPPORTED_LANGUAGES array, in display order.
 *   * `setLanguage` — switch language + persist to localStorage.
 *   * `isReady`     — true once i18next has finished initialising.
 *
 * `namespace` defaults to `common` (matching i18next's defaultNS). Pass
 * a namespace or array of namespaces to scope `t` the same way you
 * would with useTranslation directly.
 */
export function useLanguage(namespace) {
  const { t, i18n, ready } = useTranslation(namespace);

  const language = i18n.resolvedLanguage || i18n.language || FALLBACK_LANGUAGE;

  const setLanguage = useCallback(
    (code) => {
      if (!SUPPORTED_LANGUAGES.some((l) => l.code === code)) {
        if (import.meta.env.DEV) {
          console.warn(`[useLanguage] ignoring unsupported language: ${code}`);
        }
        return;
      }
      // changeLanguage returns a promise; we don't await it because UI
      // updates are driven by the `languageChanged` event internally.
      i18n.changeLanguage(code);

      // Belt-and-braces: i18next's LanguageDetector should already do this,
      // but writing directly to localStorage guarantees the preference
      // survives a hard reload even if the detector's cache flush is
      // ever disabled.
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
        }
      } catch {
        /* storage may be disabled — silent fall-through */
      }
    },
    [i18n],
  );

  const languages = useMemo(() => SUPPORTED_LANGUAGES, []);

  return {
    t,
    i18n,
    ready: Boolean(ready),
    language,
    languages,
    setLanguage,
  };
}

export default useLanguage;
