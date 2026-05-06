// sections/services/ServicesNotIncluded.jsx
// TODO: Full implementation — see pages.md §2.6

export default function ServicesNotIncluded() {
  return (
    <div className="site-container" style={{ paddingBottom: "clamp(48px, 6vw, 72px)" }}>
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "clamp(16px, 3vw, 28px)" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 500, color: "var(--color-text-primary)", marginBottom: "10px" }}>
          To Be Clear — Here's What We Don't Take On
        </h2>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "640px" }}>
          Appriyo is focused. We turn down generic website-only projects, one-off freelance tasks, and design-only work with no functionality.
        </p>
      </div>
    </div>
  );
}