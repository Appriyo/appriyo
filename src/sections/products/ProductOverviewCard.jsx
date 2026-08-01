// sections/products/ProductOverviewCard.jsx
// Props: id — looks up the product entry from translations.

import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/hooks";

export default function ProductOverviewCard({ id }) {
  const { t } = useLanguage("products");
  const item = t(`products.items.${id}`, { returnObjects: true });

  return (
    <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="product-card-grid">
          <div>
            <p style={{ fontSize: "12px", color: "var(--color-accent-light)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
              {item.name}
            </p>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>
              {item.tagline}
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {item.features.map((f, i) => (
                <li key={i} style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                  {t("common.listCheckmark")} {f}
                </li>
              ))}
            </ul>
            <Link to={item.ctaHref} style={{ fontSize: "14px", color: "var(--color-primary)", textDecoration: "none" }}>
              {t("products.overviewCard.learnMore")}
            </Link>
          </div>
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "32px", color: "var(--color-text-muted)", fontSize: "13px", textAlign: "center" }}>
            {t("products.overviewCard.screenshotPlaceholder")}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:767px){.product-card-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
