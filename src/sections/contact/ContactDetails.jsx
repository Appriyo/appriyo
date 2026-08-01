// src/sections/contact/ContactDetails.jsx
// TODO: Full implementation — see pages.md §9.3

import { useLanguage } from "../../i18n/hooks";

export default function ContactDetails() {
  const { t } = useLanguage("contact");
  // Inline contact values — these are not in the JSON because they are
  // canonical reference data (a real email and phone number), not localisable
  // copy. The labels around them ARE translated; only the values stay
  // hard-coded because there's no business case for a Bangla phone number
  // or email.
  const email = "contact@appriyo.com";
  const phone = "+880 1410394038";
  const hours = "Sun–Thu, 9 AM – 6 PM (GMT+6)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>
          {t("contact.details.emailLabel", { email })}
        </p>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>
          {t("contact.details.phoneLabel", { phone })}
        </p>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
          {t("contact.details.hoursLabel", { hours })}
        </p>
      </div>
      <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
        {t("contact.details.responseTime")}
      </p>
    </div>
  );
}
