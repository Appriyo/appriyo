// pages/Contact.jsx
import ContactForm    from "../sections/contact/ContactForm";
import ContactDetails from "../sections/contact/ContactDetails";
import { useLanguage } from "../i18n/hooks";
import usePageMeta from "../hooks/usePageMeta";

export default function Contact() {
  usePageMeta({
    titleKey: "metadata.contact.title",
    descriptionKey: "metadata.contact.description",
  });
  const { t } = useLanguage("contact");
  return (
    <div style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))" }}>
      <div className="site-container section-spacing">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          {t("contact.page.kicker")}
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "12px" }}>
          {t("contact.page.title")}
        </h1>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "48px", maxWidth: "500px" }}>
          {t("contact.page.intro")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }} className="contact-grid">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
      <style>{`@media(max-width:767px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
