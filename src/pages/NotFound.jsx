// pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "24px" }}>
      <p style={{ fontSize: "80px", fontWeight: 700, color: "var(--color-border)", marginBottom: "16px", lineHeight: 1 }}>404</p>
      <h1 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>This Page Doesn't Exist</h1>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "32px" }}>You may have followed an old link or typed something wrong. That's okay.</p>
      <Link to="/" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
        Back to Homepage
      </Link>
    </div>
  );
}