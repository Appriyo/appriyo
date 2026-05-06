// sections/product-detail/ProductAudience.jsx
// Props: text (string)

export function ProductAudience({ text }) {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>Who It's For</h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7 }}>{text}</p>
      </div>
    </section>
  );
}

// sections/product-detail/ProductCTA.jsx
// Props: heading, ctaLabel, ctaHref

export function ProductCTA({ heading, ctaLabel = "Talk to Us", ctaHref = "/contact" }) {
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