// sections/home/AboutPreview.jsx
// TODO: Full implementation — see pages.md §1.7

import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section id="about" className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>About Appriyo</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>A Small Team Solving Real Business Problems</h2>
        <p style={{ color: "var(--color-text-secondary)", maxWidth: "560px", marginBottom: "32px", lineHeight: 1.7 }}>
          Appriyo is a focused team of four based in Khulna, Bangladesh. Every client works directly with the people building their system.
        </p>
        {/* TODO: 4-member team grid */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", color: "var(--color-text-muted)", fontSize: "14px", marginBottom: "24px" }}>
          [Team grid: Shahajalal · Preota · Munna · Hazera]
        </div>
        <Link to="/about" style={{ fontSize: "14px", color: "var(--color-primary)", textDecoration: "none" }}>Meet the full team →</Link>
      </div>
    </section>
  );
}