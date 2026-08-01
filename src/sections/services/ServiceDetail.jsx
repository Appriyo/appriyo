// sections/services/ServiceDetail.jsx
// Reused 4× — one per service. Props: id, isLast. Strings come from
// translations under services.items.<id>.

import { useLanguage } from "../../i18n/hooks";

export default function ServiceDetail({ id }) {
  const { t } = useLanguage("services");
  const item = t(`services.items.${id}`, { returnObjects: true });
  const examples = item.examples ?? [];
  const outcomes = item.outcomes ?? [];

  return (
    <section aria-labelledby={`service-${id}`} style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 id={`service-${id}`} style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
          {item.title}
        </h2>
        <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--color-primary)", marginBottom: "16px" }}>
          {item.tagline}
        </p>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7, marginBottom: "24px" }}>
          {item.description}
        </p>
        {/* TODO: examples + outcomes 2-col grid */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "16px", color: "var(--color-text-muted)", fontSize: "13px", marginBottom: "20px" }}>
          {t("services.placeholder.examples", { items: examples.slice(0, 2).join(" · ") })}
          {" | "}
          {t("services.placeholder.outcomes", { items: outcomes.slice(0, 2).join(" · ") })}
        </div>
        {item.ctaLabel ? (
          <a href={item.ctaHref} style={{ fontSize: "14px", color: "var(--color-primary)", textDecoration: "none" }}>
            {item.ctaLabel} →
          </a>
        ) : null}
      </div>
    </section>
  );
}
