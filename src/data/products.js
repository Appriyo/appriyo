// src/data/products.js — shape per docs/COMPONENT_INVENTORY.md
// "Product Pages" section.
//
// Product metadata ONLY: slug, namespaceKey (used to look up the
// localised copy in src/locales/<lng>/product-detail/product-detail.json),
// name, tagline, status, and the screenshot path.
//
// All user-facing copy (subtext, problem, capabilities, techStack, and
// the localised name/tagline) lives in the productDetail namespace. The
// English `name`/`tagline` here are kept as a fallback for environments
// where the namespace bundle hasn't loaded yet (e.g. the first paint
// of a lazily-loaded detail page); the canonical source is the JSON.
//
// Status values:
//   "live"             → "Live product"            (renderer maps it)
//   "in-development"   → "In development"          (renderer maps it)
// The mapping lives in components/StampStatus.jsx so the words are
// defined in exactly one place.
//
// Add a new product by:
//   1. Creating a JSON entry under productDetail.products.<key> in
//      every supported locale.
//   2. Adding a new entry here with slug + namespaceKey + name + tagline
//      + status + screenshot path.

export const products = [
  {
    slug: "amar-repair",
    namespaceKey: "amarRepair",
    name: "Amar Repair",
    tagline: "Repair Store Management System",
    status: "live",
    screenshot: "/img/screenshots/amar-repair-dashboard.webp",
  },
  {
    slug: "amar-batch",
    namespaceKey: "amarBatch",
    name: "Amar Batch",
    tagline: "Teacher & Batch Management System",
    status: "in-development",
    screenshot: "/img/screenshots/amar-batch-dashboard.webp",
  },
];

// Look up a product by slug. Returns undefined if not found.
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

/**
 * The product featured in the Home hero. Using a slug (not `products[0]`)
 * means we can add or reorder products without silently breaking the
 * hero.
 */
export const HERO_PRODUCT_SLUG = "amar-repair";