// sections/home/ContactSection.jsx
// TODO: Full implementation — see pages.md §1.8
// Same form used in /contact page — extract to sections/contact/ContactForm.jsx

import ContactForm from "../contact/ContactForm";
import ContactDetails from "../contact/ContactDetails";

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Get In Touch</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>Tell Us About Your Business Problem</h2>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "48px" }}>No tech jargon. No pressure. Just a real conversation.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }} className="contact-grid">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
      <style>{`@media(max-width:767px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}