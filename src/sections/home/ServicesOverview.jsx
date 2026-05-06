// sections/home/ServicesOverview.jsx
// TODO: Full implementation — see pages.md §1.2

export default function ServicesOverview() {
  return (
    <section id="services" className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>Four Ways Appriyo Helps Your Business</h2>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "48px" }}>We focus on four things and do them well.</p>
        {/* TODO: 4 ServiceCards */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          [Service cards: Automation · Custom Software · AI Integration · Consulting]
        </div>
      </div>
    </section>
  );
}