// sections/products/ProductHero.jsx
// Props: label, headline, description, ctaHref

import { useLanguage } from "../../i18n/hooks";

export default function ProductHero({ label, headline, description, ctaHref = "/contact" }) {
  const { t } = useLanguage("common");
  return (
    <header className="section-spacing" style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-accent-light)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>{label}</p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", maxWidth: "640px", marginBottom: "16px" }}>{headline}</h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--color-text-secondary)", maxWidth: "560px", marginBottom: "32px", lineHeight: 1.6 }}>{description}</p>
        <a href={ctaHref} style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
          {t("common.talkToUs")}
        </a>
      </div>
    </header>
  );
}
