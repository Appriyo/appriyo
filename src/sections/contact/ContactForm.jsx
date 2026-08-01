// src/sections/contact/ContactForm.jsx
//
// Accessible labelled form — every input has an associated <label> with
// matching htmlFor/id. The visible phone/email in ContactDetails is the
// other way to reach us, per CONTENT_STRATEGY.md §3.9.

import { useLanguage } from "../../i18n/hooks";

export default function ContactForm() {
  const { t } = useLanguage("contact");
  const fields = [
    { name: "name",          type: "text",  required: true,  multiline: false, autocomplete: "name" },
    { name: "businessType",  type: "text",  required: false, multiline: false, autocomplete: "organization" },
    { name: "phone",         type: "tel",   required: false, multiline: false, autocomplete: "tel" },
    { name: "problem",       type: "text",  required: true,  multiline: true  },
  ];

  return (
    <form
      aria-label={t("contact.form.ariaLabel")}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      {fields.map((f) => {
        const inputId = `contact-${f.name}`;
        const label = t(`contact.form.fields.${f.name}.label`);
        const required = f.required;
        return (
          <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor={inputId}
              style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-primary)" }}
            >
              {label}
              {required ? (
                <span aria-hidden="true"> {t("common.requiredMarker")}</span>
              ) : null}
            </label>
            {f.multiline ? (
              <textarea
                id={inputId}
                name={f.name}
                rows={5}
                required={required}
                aria-required={required || undefined}
                style={{
                  padding: "12px 14px",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  background: "var(--color-surface)",
                  color: "var(--color-text-primary)",
                  resize: "vertical",
                }}
              />
            ) : (
              <input
                id={inputId}
                name={f.name}
                type={f.type}
                required={required}
                aria-required={required || undefined}
                autoComplete={f.autocomplete}
                style={{
                  padding: "12px 14px",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  background: "var(--color-surface)",
                  color: "var(--color-text-primary)",
                }}
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        style={{
          padding: "12px 24px",
          background: "var(--color-primary)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {t("contact.form.submit")}
      </button>
    </form>
  );
}
