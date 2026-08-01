// sections/about/AboutHeader.jsx
import { useLanguage } from "../../i18n/hooks";

export function AboutHeader() {
  const { t } = useLanguage("about");
  return (
    <header className="section-spacing" style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          {t("about.header.kicker")}
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", maxWidth: "600px" }}>
          {t("about.header.heading")}
        </h1>
      </div>
    </header>
  );
}

// sections/about/WhoWeAre.jsx
export function WhoWeAre() {
  const { t } = useLanguage("about");
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>
          {t("about.whoWeAre.heading")}
        </h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7 }}>
          {t("about.whoWeAre.body")}
        </p>
      </div>
    </section>
  );
}

// sections/about/Philosophy.jsx
export function Philosophy() {
  const { t } = useLanguage("about");
  const items = t("about.philosophy.items", { returnObjects: true });
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "32px" }}>
          {t("about.philosophy.heading")}
        </h2>
        {/* TODO: Belief points table */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "24px", color: "var(--color-text-muted)", fontSize: "14px" }}>
          [{t("about.philosophy.itemsLabel")}: {items.join(" · ")}]
        </div>
      </div>
    </section>
  );
}

// sections/about/TeamGrid.jsx
export function TeamGrid() {
  const { t } = useLanguage("about");
  const members = t("about.team.members", { returnObjects: true });

  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "32px" }}>
          {t("about.team.heading")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {members.map((m) => (
            <div key={m.name} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-primary)" }}>
                  {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
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
  const { t } = useLanguage("about");
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(48px, 6vw, 72px)" }}>
      <div className="site-container">
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "16px" }}>
          {t("about.howWeWork.heading")}
        </h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.7 }}>
          {t("about.howWeWork.body")}
        </p>
      </div>
    </section>
  );
}
