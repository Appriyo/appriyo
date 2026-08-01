// pages/Services.jsx
import ServicesHeader      from "../sections/services/ServicesHeader";
import ServiceDetail       from "../sections/services/ServiceDetail";
import ServicesNotIncluded from "../sections/services/ServicesNotIncluded";
import { useLanguage } from "../i18n/hooks";
import usePageMeta from "../hooks/usePageMeta";

export default function Services() {
  usePageMeta({
    titleKey: "metadata.services.title",
    descriptionKey: "metadata.services.description",
  });
  const { t } = useLanguage("services");
  const serviceIds = ["automation", "customSoftware", "aiIntegration", "consulting"];

  return (
    <>
      <ServicesHeader />
      {serviceIds.map((id) => (
        <ServiceDetail key={id} id={id} />
      ))}
      <ServicesNotIncluded />
      {/* TODO: Final CTABlock */}
      <div className="site-container" style={{ paddingBottom: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>
          {t("services.cta.heading")}
        </h2>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>
          {t("services.cta.subtext")}
        </p>
        <a href="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
          {t("services.cta.button")}
        </a>
      </div>
    </>
  );
}
