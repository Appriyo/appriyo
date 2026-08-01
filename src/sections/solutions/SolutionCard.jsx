// sections/solutions/SolutionCard.jsx
// Props: id — looks up the solution entry from translations.

import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/hooks";

export default function SolutionCard({ id }) {
  const { t } = useLanguage("solutions");
  const item = t(`solutions.items.${id}`, { returnObjects: true });

  return (
    <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(32px, 4vw, 48px)" }}>
      <div className="site-container">
        <blockquote style={{ borderLeft: "2px solid var(--color-primary)", paddingLeft: "16px", marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--color-text-secondary)" }}>
          "{item.problem}"
        </blockquote>
        <p style={{ fontSize: "14px", color: "var(--color-text-primary)", marginBottom: "8px" }}>{item.solution}</p>
        {item.result ? (
          <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-primary)", marginBottom: "16px" }}>{item.result}</p>
        ) : null}
        <Link to={item.ctaHref} style={{ fontSize: "14px", color: "var(--color-primary)", textDecoration: "none" }}>
          {item.ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
