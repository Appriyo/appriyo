// sections/services/ServiceDetail.jsx
// Reused 4× — one per service. Props: id, title, oneLiner, whatItIs, examples, outcomes, cta
// TODO: Full implementation — see pages.md §2.2–2.5

export default function ServiceDetail({ id, title, oneLiner, whatItIs, examples = [], outcomes = [], cta }) {
  return (
    <section aria-labelledby={`service-${id}`} style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 id={`service-${id}`} style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>{title}</h2>
        <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--color-primary)", marginBottom: "16px" }}>{oneLiner}</p>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7, marginBottom: "24px" }}>{whatItIs}</p>
        {/* TODO: examples + outcomes 2-col grid */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "16px", color: "var(--color-text-muted)", fontSize: "13px", marginBottom: "20px" }}>
          [Examples: {examples.slice(0, 2).join(" · ")}...] | [Outcomes: {outcomes.slice(0, 2).join(" · ")}...]
        </div>
        {cta && <a href={cta.href} style={{ fontSize: "14px", color: "var(--color-primary)", textDecoration: "none" }}>{cta.label} →</a>}
      </div>
    </section>
  );
}