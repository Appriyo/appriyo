// src/pages/AmarRepair.jsx — Amar Repair product detail page.
//
// Thin wrapper around ProductPageTemplate. The product data (slug,
// name, tagline, status, screenshot) lives in src/data/products.js;
// the localised copy (subtext, problem, capabilities, techStack) is
// read from the productDetail namespace via ProductPageTemplate.
import { getProductBySlug } from "../data/products";
import ProductPageTemplate from "../components/ProductPageTemplate";
import usePageMeta from "../hooks/usePageMeta";

const product = getProductBySlug("amar-repair");

export default function AmarRepair() {
  usePageMeta({
    titleKey: "metadata.amarRepair.title",
    descriptionKey: "metadata.amarRepair.description",
    ogImage: "/img/screenshots/amar-repair-dashboard.webp",
  });

  if (!product) return null;
  return <ProductPageTemplate product={product} />;
}
