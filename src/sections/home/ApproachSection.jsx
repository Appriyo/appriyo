// sections/home/ApproachSection.jsx
// TODO: Full implementation — see pages.md §1.6

export default function ApproachSection() {
  const steps = [
    { n: "01", title: "Understand", desc: "Conversation about your business, workflow, and goals." },
    { n: "02", title: "Map",        desc: "Document what's happening and identify what to fix." },
    { n: "03", title: "Build",      desc: "Focused solution — only what you need. Fast iteration." },
    { n: "04", title: "Support",    desc: "We stay. If something breaks or needs adjustment, we fix it." },
  ];

  return (
    <section id="approach" className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Our Approach</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "48px" }}>How We Work With You</h2>
        {/* TODO: Horizontal steps (desktop) / vertical (mobile) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
          {steps.map(s => (
            <div key={s.n}>
              <p style={{ fontSize: "36px", fontWeight: 700, color: "rgba(37,99,235,0.25)", marginBottom: "8px" }}>{s.n}</p>
              <p style={{ fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "6px" }}>{s.title}</p>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}