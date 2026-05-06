// sections/home/SolutionsOverview.jsx
// TODO: Full implementation — see pages.md §1.3

export default function SolutionsOverview() {
  return (
    <section id="solutions" className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Real Problems We Solve</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "48px" }}>Do Any of These Sound Familiar?</h2>
        {/* TODO: Solution entries (alternating layout) */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          [Solution entries: Repair Shop · Coaching Center · Business Cards · Manual Tasks]
        </div>
      </div>
    </section>
  );
}