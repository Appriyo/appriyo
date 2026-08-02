// sections/product-detail/ProductAudience.jsx
// Props: text (string)

import { useLanguage } from "../../i18n/hooks";

export function ProductAudience({ text }) {
  const { t } = useLanguage("productDetail");
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>
          {t("productDetail.section.audienceHeading")}
        </h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7 }}>{text}</p>
      </div>
    </section>
  );
}

// sections/product-detail/ProductCTA.jsx
// Props: heading, ctaLabel, ctaHref
//
// `ctaLabel` and `ctaHref` are intentionally required — callers must
// pass translated strings (e.g. from productDetail.items.<id>.ctaButton).
// There is NO English fallback: an untranslated CTA would render in
// mixed-language English regardless of the active locale, which is the
// exact bug this hook was hardened against.

export function ProductCTA({ heading, ctaLabel, ctaHref = "/contact" }) {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)", textAlign: "center" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "24px" }}>{heading}</h2>
        <a href={ctaHref} style={{ display: "inline-flex", padding: "12px 28px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}