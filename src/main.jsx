// src/main.jsx — application bootstrap.
//
// IMPORTANT: `./i18n` is imported BEFORE React renders. The side effect
// of that import is what runs i18next.init() exactly once. If you move
// the import below the `createRoot(...).render(...)` call, the very
// first paint will use the i18next fallback (English) instead of the
// user's saved preference, and you'll get a one-frame flash.
//
// The single import statement is sufficient because src/i18n/index.js
// guards itself against double initialisation via a Symbol attached to
// globalThis — see the INIT_FLAG comment in that file.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import "./i18n"; // initialises i18next and registers every locale resource
import i18n from "./i18n";
import { getDirFor } from "./i18n/config";
import App from "./App";

// Keep <html lang> and <html dir> in sync with the active language so
// screen readers, browser hyphenation, CSS `:lang()` selectors, and
// directional icons all behave correctly. Today both supported languages
// are LTR, but `dir` is plumbed through config.js so adding an RTL
// language (Arabic, Hebrew, Urdu, …) is a config-only change.
function syncDocumentLanguage(lng) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = lng;
  html.dir = getDirFor(lng);
}

syncDocumentLanguage(i18n.resolvedLanguage || i18n.language);
i18n.on("languageChanged", syncDocumentLanguage);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);