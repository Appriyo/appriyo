// sections/solutions/SolutionCard.jsx
// Props: problem, solution, result, ctaLabel, ctaHref
// TODO: Full implementation — see pages.md §3.2

import { Link } from "react-router-dom";

export default function SolutionCard({ problem, solution, result, ctaLabel, ctaHref }) {
  return (
    <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(32px, 4vw, 48px)" }}>
      <div className="site-container">
        <blockquote style={{ borderLeft: "2px solid var(--color-primary)", paddingLeft: "16px", marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--color-text-secondary)" }}>
          "{problem}"
        </blockquote>
        <p style={{ fontSize: "14px", color: "var(--color-text-primary)", marginBottom: "8px" }}>{solution}</p>
        <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-primary)", marginBottom: "16px" }}>{result}</p>
        <Link to={ctaHref} style={{ fontSize: "14px", color: "var(--color-primary)", textDecoration: "none" }}>{ctaLabel} →</Link>
      </div>
    </div>
  );
}