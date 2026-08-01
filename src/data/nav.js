// src/data/nav.js — per CONTENT_STRATEGY.md §3.1.
//
// "Work" is omitted until a real case study exists (see §2 and §6).
//
// Labels are translation keys, NOT hard-coded strings. The actual text
// lives in src/locales/<lng>/navigation/navigation.json and is resolved
// at render time via useLanguage("navigation").t(labelKey). This keeps
// the data file language-neutral and lets the navbar swap between
// English and Bangla without conditional code.
//
// If you add a new entry here, add the matching translation key to BOTH
// src/locales/en/navigation/navigation.json AND
// src/locales/bn/navigation/navigation.json, otherwise the fallback
// chain will return the English string when the user has selected bn.
export const navLinks = [
  { labelKey: "navigation.services", href: "/services" },
  { labelKey: "navigation.products", href: "/products" },
  { labelKey: "navigation.about",    href: "/about"    },
];

export const ctaLink = {
  labelKey: "navigation.cta.talkToUs",
  href: "/contact",
};
