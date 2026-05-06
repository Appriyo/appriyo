// pages/Solutions.jsx
import SolutionsHeader from "../sections/solutions/SolutionsHeader";
import SolutionCard    from "../sections/solutions/SolutionCard";
import { solutionsData } from "../data/solutionsData";

export default function Solutions() {
  return (
    <>
      <SolutionsHeader />
      {solutionsData.map(s => <SolutionCard key={s.id} {...s} />)}
      {/* TODO: Final CTA */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <div className="site-container">
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>Don't See Your Problem Here?</h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>Tell us what's slowing you down in your own words.</p>
          <a href="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
            Tell Us Your Problem
          </a>
        </div>
      </div>
    </>
  );
}