// sections/solutions/SolutionsHeader.jsx
// TODO: Full implementation — see pages.md §3.1

import { useLanguage } from "../../i18n/hooks";

export default function SolutionsHeader() {
  const { t } = useLanguage("solutions");
  return (
    <header className="section-spacing" style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))", textAlign: "center" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          {t("solutions.header.kicker")}
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "16px" }}>
          {t("solutions.header.heading")}
        </h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
          {t("solutions.header.subtext")}
        </p>
      </div>
    </header>
  );
}
