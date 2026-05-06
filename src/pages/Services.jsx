// pages/Services.jsx
import ServicesHeader      from "../sections/services/ServicesHeader";
import ServiceDetail       from "../sections/services/ServiceDetail";
import ServicesNotIncluded from "../sections/services/ServicesNotIncluded";
import { servicesData }    from "../data/servicesData";

export default function Services() {
  return (
    <>
      <ServicesHeader />
      {servicesData.map((service, i) => (
        <ServiceDetail key={service.id} {...service} isLast={i === servicesData.length - 1} />
      ))}
      <ServicesNotIncluded />
      {/* TODO: Final CTABlock */}
      <div className="site-container" style={{ paddingBottom: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>Not Sure Which Service You Need?</h2>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>Tell us what's slowing your business down — we'll figure out the right approach together.</p>
        <a href="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
          Get a Free Consultation
        </a>
      </div>
    </>
  );
}