// src/hooks/usePageMeta.js
//
// Lightweight per-page <head> updater. We don't pull in react-helmet
// because Phase 4 only needs title + description + a single OG image,
// and a 30-line hook does that without adding a dependency.
//
// On mount it sets document.title, and creates / mutates three <meta>
// tags (description, og:title, og:image). On unmount it restores the
// previous title so navigation back to / leaves no stale "Amar Repair"
// in the tab.
//
// Two call shapes:
//
//   usePageMeta({ title, description, ogImage })            — raw strings
//   usePageMeta({ titleKey, descriptionKey, ogImage, ns })   — translation
//                                                              keys; the
//                                                              hook re-renders
//                                                              when the
//                                                              language changes
//
// The key-based form is what every i18n-aware page should use. It
// subscribes to i18next's `languageChanged` event so the <title> and
// meta tags update instantly when the user toggles Bangla/English —
// without a page reload.
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setPropertyMeta(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function usePageMeta({ title, description, ogImage, titleKey, descriptionKey, ns = "metadata" }) {
  const { t, i18n } = useTranslation(ns);

  // Resolve title + description — prefer translation keys when supplied.
  const resolvedTitle = titleKey ? t(titleKey) : title;
  const resolvedDescription = descriptionKey ? t(descriptionKey) : description;

  useEffect(() => {
    const prevTitle = document.title;
    if (resolvedTitle) document.title = resolvedTitle;

    // Cache and restore the previous description so leaving the page
    // doesn't permanently overwrite what another page had set.
    const prevDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");
    const prevOgTitle = document
      .querySelector('meta[property="og:title"]')
      ?.getAttribute("content");
    const prevOgImage = document
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");

    if (resolvedDescription) setMeta("description", resolvedDescription);
    setPropertyMeta("og:title", resolvedTitle);
    setPropertyMeta("og:image", ogImage);

    return () => {
      document.title = prevTitle;
      setMeta("description", prevDescription || "");
      setPropertyMeta("og:title", prevOgTitle || "");
      setPropertyMeta("og:image", prevOgImage || "");
    };
  }, [resolvedTitle, resolvedDescription, ogImage, i18n.resolvedLanguage]);
}
