// sections/product-detail/ProductFeatures.jsx
// Props: features ({ feature, description }[])

export default function ProductFeatures({ features = [] }) {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "32px" }}>What It Gives You</h2>
        {/* TODO: Feature table/grid */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          [Feature list: {features.map(f => f.feature).join(" · ")}]
        </div>
      </div>
    </section>
  );
}