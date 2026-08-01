// pages/Solutions.jsx
import SolutionsHeader from "../sections/solutions/SolutionsHeader";
import SolutionCard    from "../sections/solutions/SolutionCard";
import { useLanguage } from "../i18n/hooks";
import usePageMeta from "../hooks/usePageMeta";

export default function Solutions() {
  usePageMeta({
    titleKey: "metadata.solutions.title",
    descriptionKey: "metadata.solutions.description",
  });
  const { t } = useLanguage("solutions");
  const solutionIds = ["repairShop", "coachingCenter", "businessCards", "manualTasks", "noSystem"];

  return (
    <>
      <SolutionsHeader />
      {solutionIds.map((id) => (
        <SolutionCard key={id} id={id} />
      ))}
      {/* TODO: Final CTA */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <div className="site-container">
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>
            {t("solutions.cta.heading")}
          </h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>
            {t("solutions.cta.subtext")}
          </p>
          <a href="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
            {t("solutions.cta.button")}
          </a>
        </div>
      </div>
    </>
  );
}
