// src/pages/AmarBatch.jsx — Amar Batch product detail page.
import { getProductBySlug } from "../data/products";
import ProductPageTemplate from "../components/ProductPageTemplate";
import usePageMeta from "../hooks/usePageMeta";

const product = getProductBySlug("amar-batch");

export default function AmarBatch() {
  usePageMeta({
    titleKey: "metadata.amarBatch.title",
    descriptionKey: "metadata.amarBatch.description",
    ogImage: "/img/screenshots/amar-batch-dashboard.webp",
  });

  if (!product) return null;
  return <ProductPageTemplate product={product} />;
}
