// src/pages/AmarRepair.jsx — Amar Repair product detail page.
//
// Thin wrapper around ProductPageTemplate. The data lives in
// src/data/products.js; this file only wires meta tags and looks
// up the entry by slug.
import { getProductBySlug } from "../data/products";
import ProductPageTemplate from "../components/ProductPageTemplate";
import usePageMeta from "../hooks/usePageMeta";

const product = getProductBySlug("amar-repair");

export default function AmarRepair() {
  usePageMeta({
    title: "Amar Repair — Repair Store Management System · Appriyo",
    description: product?.subtext,
    // Default OG image until a dedicated one is provided. Hero
    // screenshot reused for now per Asset_Checklist.md (Nice to Have).
    ogImage: "/img/screenshots/amar-repair-dashboard.webp",
  });

  if (!product) return null;
  return <ProductPageTemplate product={product} />;
}
