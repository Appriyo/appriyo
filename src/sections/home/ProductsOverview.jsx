// sections/home/ProductsOverview.jsx
// TODO: Full implementation — see pages.md §1.4

import { Link } from "react-router-dom";

export default function ProductsOverview() {
  return (
    <section id="products" className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Our Products</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "48px" }}>Built from Real Business Problems</h2>
        {/* TODO: 3 ProductCards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {["Amar Repair", "Amar Batch", "Amar Card"].map(name => (
            <div key={name} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px" }}>
              <p style={{ fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>{name}</p>
              <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>[Product tagline and features here]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}