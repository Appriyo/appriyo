// pages/About.jsx
import { AboutHeader, WhoWeAre, Philosophy, TeamGrid, HowWeWork } from "../sections/about/AboutHeader";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <AboutHeader />
      <WhoWeAre />
      <Philosophy />
      <TeamGrid />
      <HowWeWork />
      {/* CTA */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <div className="site-container">
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>Want to Work With Us?</h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>The first step is just a conversation. No pressure, no pitch.</p>
          <Link to="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}