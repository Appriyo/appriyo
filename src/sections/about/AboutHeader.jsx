// sections/about/AboutHeader.jsx
export function AboutHeader() {
  return (
    <header className="section-spacing" style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>About Appriyo</p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", maxWidth: "600px" }}>We're a Small Team. We Like It That Way.</h1>
      </div>
    </header>
  );
}

// sections/about/WhoWeAre.jsx
export function WhoWeAre() {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>What Appriyo Is</h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7 }}>
          Appriyo is an AI-powered digital transformation company focused on solving real-world business problems through simple, practical technology. Based in Khulna, Bangladesh.
        </p>
      </div>
    </section>
  );
}

// sections/about/Philosophy.jsx
export function Philosophy() {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "32px" }}>Our Philosophy</h2>
        {/* TODO: Belief points table */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          [Beliefs: Problem-first · Simplicity · Practical · Long-term · Direct access]
        </div>
      </div>
    </section>
  );
}

// sections/about/TeamGrid.jsx
export function TeamGrid() {
  const team = [
    { name: "Shahajalal Mahmud", role: "Development & Architecture" },
    { name: "Preota Saha",       role: "UI & Design" },
    { name: "Md Munna Sardar",   role: "Testing & QA" },
    { name: "Hazera Islam Mim",  role: "Marketing & Social Media" },
  ];

  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "32px" }}>The Team</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {team.map(m => (
            <div key={m.name} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-primary)" }}>{m.name.split(" ").map(n => n[0]).join("").slice(0,2)}</span>
              </div>
              <p style={{ fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "4px" }}>{m.name}</p>
              <p style={{ fontSize: "13px", color: "var(--color-primary)" }}>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// sections/about/HowWeWork.jsx
export function HowWeWork() {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>How a Typical Engagement Works</h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7 }}>
          We start every project with a conversation — not a proposal. We build in short cycles, show you progress often, and stay involved after launch.
        </p>
      </div>
    </section>
  );
}