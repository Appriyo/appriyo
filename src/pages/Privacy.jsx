// src/pages/Privacy.jsx
// TODO: Pull content from PRIVACY.md when available

import { useLanguage } from "../i18n/hooks";
import usePageMeta from "../hooks/usePageMeta";

export default function Privacy() {
  usePageMeta({
    titleKey: "metadata.privacy.title",
    descriptionKey: "metadata.privacy.description",
  });
  const { t } = useLanguage("legal");
  return (
    <div style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))", paddingBottom: "clamp(64px, 8vw, 120px)" }}>
      <div className="site-container" style={{ maxWidth: "720px" }}>
        <h1 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "32px" }}>
          {t("legal.privacy.title")}
        </h1>
        <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
          {t("legal.privacy.comingSoon")}
        </p>
      </div>
    </div>
  );
}
