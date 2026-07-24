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
import { useEffect } from "react";

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

export default function usePageMeta({ title, description, ogImage }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

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

    if (description) setMeta("description", description);
    setPropertyMeta("og:title", title);
    setPropertyMeta("og:image", ogImage);

    return () => {
      document.title = prevTitle;
      setMeta("description", prevDescription || "");
      setPropertyMeta("og:title", prevOgTitle || "");
      setPropertyMeta("og:image", prevOgImage || "");
    };
  }, [title, description, ogImage]);
}