// src/i18n/hooks.js
// Public barrel for the i18n helpers. Components should import from here:
//
//   import { useLanguage } from "@/i18n/hooks";
//
// so that internal files under src/i18n/ can move around without
// breaking call sites. Keep this file's export list narrow — only add
// helpers that are intended for component authors.

export { useLanguage } from "./useLanguage";
export { useTranslation } from "react-i18next";
export { default as i18n } from "./index";
export {
  SUPPORTED_LANGUAGES,
  FALLBACK_LANGUAGE,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  NAMESPACES,
} from "./config";
