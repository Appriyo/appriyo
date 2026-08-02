// src/hooks/usePageMeta.js
//
// Lightweight per-page <head> updater. We don't pull in react-helmet
// because the site only needs title + description + a single OG image,
// and a 30-line hook does that without adding a dependency.
//
// Two call shapes:
//
//   usePageMeta({ title, description, ogImage })            — raw strings
//   usePageMeta({ titleKey, descriptionKey, ogImage, ns })   — translation
//                                                              keys; the
//                                                              hook re-renders
//                                                              when the language changes
//
// The key-based form is what every i18n-aware page should use. It
// subscribes to i18next's `languageChanged` event so the <title> and
// meta tags update instantly when the user toggles Bangla/English —
// without a page reload. We listen to the event directly rather than
// relying solely on a re-render so even components that don't re-render
// (e.g. memoised leaves) keep their meta up to date.
//
// We deliberately do NOT restore the previous meta on unmount. Modern
// SPAs leave the last-set values in place — restoring leads to flicker
// and "previous = current" bugs when the new route's meta reads itself
// at mount time. The latest page wins.
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
  if (content === undefined || content === null) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Apply the resolved title/description/og:image to the document. Used
 * both from the React effect (initial mount) and from the languageChanged
 * listener (so we don't depend on a re-render to push new strings).
 */
function applyPageMeta({ title, description, ogImage }) {
  if (title) document.title = title;
  if (description) setMeta("description", description);
  if (title) setPropertyMeta("og:title", title);
  setPropertyMeta("og:image", ogImage);
}

export default function usePageMeta({
  title,
  description,
  ogImage,
  titleKey,
  descriptionKey,
  ns = "metadata",
}) {
  const { t, i18n } = useTranslation(ns);

  // Resolve title + description — prefer translation keys when supplied.
  const resolvedTitle = titleKey ? t(titleKey) : title;
  const resolvedDescription = descriptionKey ? t(descriptionKey) : description;

  // Single effect — pulls double duty:
  //   * On mount and when the resolved values change, push them to <head>.
  //   * Subscribe to languageChanged so the meta updates even if no
  //     consumer re-renders. Both paths share applyPageMeta so they
  //     cannot diverge.
  useEffect(() => {
    applyPageMeta({ title: resolvedTitle, description: resolvedDescription, ogImage });
    const handler = () =>
      applyPageMeta({ title: resolvedTitle, description: resolvedDescription, ogImage });
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, [resolvedTitle, resolvedDescription, ogImage, i18n]);
}