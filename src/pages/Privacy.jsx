// src/pages/Privacy.jsx
// TODO: Pull content from PRIVACY.md when available

export default function Privacy() {
  return (
    <div style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))", paddingBottom: "clamp(64px, 8vw, 120px)" }}>
      <div className="site-container" style={{ maxWidth: "720px" }}>
        <h1 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "32px" }}>Privacy Policy</h1>
        <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
          Privacy policy content coming soon. For questions, contact us at contact@appriyo.com.
        </p>
      </div>
    </div>
  );
}