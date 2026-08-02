// pages/NotFound.jsx
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/hooks";

export default function NotFound() {
  const { t } = useLanguage("errors");
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "24px" }}>
      <p style={{ fontSize: "80px", fontWeight: 700, color: "var(--color-border)", marginBottom: "16px", lineHeight: 1 }}>{t("errors.notFound.title")}</p>
      <h1 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>
        {t("errors.notFound.heading")}
      </h1>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "32px" }}>
        {t("errors.notFound.body")}
      </p>
      <Link to="/" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
        {t("errors.notFound.backHome")}
      </Link>
    </div>
  );
}