// sections/contact/ContactForm.jsx
// TODO: Full implementation with React Hook Form + Zod — see pages.md §9.2

export default function ContactForm() {
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* TODO: Name, Business Type, Problem textarea, Phone, Contact method radio */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "16px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          [Form fields: Name · Business Type · Problem · Phone · Preferred Contact]
        </div>
        <button type="submit" style={{ padding: "12px 24px", background: "var(--color-primary)", color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}