// sections/contact/ContactDetails.jsx
// TODO: Full implementation — see pages.md §9.3

export default function ContactDetails() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>📧 contact@appriyo.com</p>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>📱 +880 1410394038 (WhatsApp)</p>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>🕐 Sun–Thu, 9 AM – 6 PM (GMT+6)</p>
      </div>
      <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>We respond within 1 business day.</p>
    </div>
  );
}