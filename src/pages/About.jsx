// pages/About.jsx
import { AboutHeader, WhoWeAre, Philosophy, TeamGrid, HowWeWork } from "../sections/about/AboutHeader";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/hooks";
import usePageMeta from "../hooks/usePageMeta";

export default function About() {
  usePageMeta({
    titleKey: "metadata.about.title",
    descriptionKey: "metadata.about.description",
  });
  const { t } = useLanguage("about");
  return (
    <>
      <AboutHeader />
      <WhoWeAre />
      <Philosophy />
      <TeamGrid />
      <HowWeWork />
      {/* CTA */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <div className="site-container">
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>
            {t("about.cta.heading")}
          </h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>
            {t("about.cta.subtext")}
          </p>
          <Link to="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
            {t("about.cta.button")}
          </Link>
        </div>
      </div>
    </>
  );
}
