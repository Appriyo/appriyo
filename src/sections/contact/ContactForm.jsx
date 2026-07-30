// sections/contact/ContactForm.jsx
//
// Accessible labelled form — every input has an associated <label> with
// matching htmlFor/id. The visible phone/email in ContactDetails is the
// other way to reach us, per CONTENT_STRATEGY.md §3.9.

export default function ContactForm() {
  return (
    <form
      aria-label="Contact form"
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label
          htmlFor="contact-name"
          style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-primary)" }}
        >
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          aria-required="true"
          autoComplete="name"
          style={{
            padding: "12px 14px",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            fontSize: "15px",
            background: "var(--color-surface)",
            color: "var(--color-text-primary)",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label
          htmlFor="contact-business-type"
          style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-primary)" }}
        >
          Business type
        </label>
        <input
          id="contact-business-type"
          name="business_type"
          type="text"
          autoComplete="organization"
          style={{
            padding: "12px 14px",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            fontSize: "15px",
            background: "var(--color-surface)",
            color: "var(--color-text-primary)",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label
          htmlFor="contact-phone"
          style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-primary)" }}
        >
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          style={{
            padding: "12px 14px",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            fontSize: "15px",
            background: "var(--color-surface)",
            color: "var(--color-text-primary)",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label
          htmlFor="contact-problem"
          style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-primary)" }}
        >
          What are you trying to solve? <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-problem"
          name="problem"
          rows={5}
          required
          aria-required="true"
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
      </div>

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
        Send message
      </button>
    </form>
  );
}