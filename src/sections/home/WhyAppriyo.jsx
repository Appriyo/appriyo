// sections/home/WhyAppriyo.jsx
// TODO: Full implementation — see pages.md §1.5

export default function WhyAppriyo() {
  return (
    <section id="why-appriyo" className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Why Appriyo</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "48px" }}>We're Not a Generic Software Agency</h2>
        {/* TODO: 2-col layout — description + 4 differentiator points */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          [4 differentiator points: Problem-First · Built for Non-Technical · Small Team · Long-Term]
        </div>
      </div>
    </section>
  );
}