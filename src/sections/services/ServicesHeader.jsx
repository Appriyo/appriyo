// sections/services/ServicesHeader.jsx
// TODO: Full implementation — see pages.md §2.1

export default function ServicesHeader() {
  return (
    <header className="section-spacing" style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))", textAlign: "center" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Our Services</p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "16px" }}>Four Services. Focused on One Goal.</h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
          We don't offer everything. We offer the four things that actually help small businesses stop wasting time.
        </p>
      </div>
    </header>
  );
}