// sections/home/HeroSection.jsx
// TODO: Full implementation — see pages.md §1.1

export default function HeroSection() {
  return (
    <section className="section-spacing" style={{ paddingTop: "calc(64px + clamp(64px, 8vw, 96px))" }}>
      <div className="site-container" style={{ textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "var(--color-accent-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
          AI-Powered Digital Transformation
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.15, marginBottom: "20px" }}>
          Still Running Your Business Manually?
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto 32px" }}>
          Appriyo replaces paper, WhatsApp threads, and spreadsheets with simple, automated systems.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="btn-primary">Let's Talk About Your Business</a>
          <a href="#products" className="btn-secondary">See What We Build</a>
        </div>
      </div>
      <style>{`
        .btn-primary { display:inline-flex; align-items:center; padding:12px 24px; background:var(--color-primary); color:#fff; border-radius:8px; font-size:15px; font-weight:500; text-decoration:none; }
        .btn-secondary { display:inline-flex; align-items:center; padding:12px 24px; border:1px solid var(--color-border); color:var(--color-text-primary); border-radius:8px; font-size:15px; font-weight:500; text-decoration:none; }
      `}</style>
    </section>
  );
}