import { Link } from "react-router-dom";
import { footerColumns } from "../../data/navigation";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)", fontFamily: "var(--font-sans)" }}>
      <div className="site-container" style={{ paddingBlock: "clamp(48px, 6vw, 80px)" }}>

        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "40px 32px" }}>

          {/* Brand */}
          <div>
            <p style={{ fontSize: "17px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "10px" }}>Appriyo</p>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, maxWidth: "220px" }}>
              Helping businesses replace manual work with simple, AI-powered systems.
            </p>
          </div>

          {/* Columns */}
          {footerColumns.map(col => (
            <div key={col.heading}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "14px" }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map(link => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: "13px", color: "var(--color-text-secondary)", textDecoration: "none" }}>
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href}
                        style={{ fontSize: "13px", color: "var(--color-text-secondary)", textDecoration: "none" }}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--color-border)", marginTop: "48px", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px" }}>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>© 2026 Appriyo Technologies. All rights reserved.</p>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>Khulna, Bangladesh. Remote services worldwide.</p>
        </div>
      </div>
    </footer>
  );
}