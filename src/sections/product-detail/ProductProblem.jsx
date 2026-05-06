// sections/product-detail/ProductProblem.jsx
// Props: heading, items (string[])
// TODO: Full implementation

export default function ProductProblem({ heading = "Sound Familiar?", items = [] }) {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "24px" }}>{heading}</h2>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontSize: "15px", color: "var(--color-text-secondary)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)" }}>—</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}