// pages/Products.jsx
import ProductsHeader      from "../sections/products/ProductsHeader";
import ProductOverviewCard from "../sections/products/ProductOverviewCard";
import { useLanguage } from "../i18n/hooks";
import usePageMeta from "../hooks/usePageMeta";

export default function Products() {
  usePageMeta({
    titleKey: "metadata.products.title",
    descriptionKey: "metadata.products.description",
  });
  const { t } = useLanguage("products");
  const productIds = ["amarRepair", "amarBatch", "amarCard"];

  return (
    <>
      <ProductsHeader />
      {productIds.map((id) => (
        <ProductOverviewCard key={id} id={id} />
      ))}
      {/* Custom product CTA */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <div className="site-container">
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>
            {t("products.cta.heading")}
          </h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>
            {t("products.cta.subtext")}
          </p>
          <a href="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
            {t("products.cta.button")}
          </a>
        </div>
      </div>
    </>
  );
}
