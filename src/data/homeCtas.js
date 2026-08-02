// src/data/homeCtas.js
//
// CTA URLs for the Home page hero. Extracted out of the i18n JSON
// because URLs are language-independent — putting them in JSON forced
// the same string to be maintained in two locales. The translatable
// labels stay in src/locales/<lng>/home/home.json under
// home.hero.primaryCta.label / home.hero.secondaryCta.label.
//
// Edit this file when the destination of a Hero CTA changes.
export const HOME_HERO_CTA = {
  primaryHref: "/products",
  secondaryHref: "/contact",
};
