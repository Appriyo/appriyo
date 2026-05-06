import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navigation";
import { useScrolled } from "../../hooks/useScrolled";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(10);
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "background 0.3s, border-color 0.3s",
    background: scrolled ? "rgba(17,24,39,0.96)" : "transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    borderBottom: scrolled ? "1px solid #1f2937" : "1px solid transparent",
    fontFamily: "var(--font-sans)",
  };

  const linkStyle = (href) => ({
    fontSize: "14px",
    fontWeight: 500,
    color: pathname === href ? "var(--color-text-primary)" : "var(--color-text-secondary)",
    textDecoration: "none",
    padding: "4px 0",
    transition: "color 0.2s",
  });

  const ctaStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 18px",
    background: "var(--color-primary)",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    minHeight: "36px",
    transition: "background 0.2s",
    whiteSpace: "nowrap",
  };

  return (
    <header style={navbarStyle}>
      <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* Logo */}
        <Link to="/" style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-primary)", textDecoration: "none" }}>
          Appriyo
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} aria-label="Primary navigation"
          className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} to={link.href} style={linkStyle(link.href)}>{link.label}</Link>
          ))}
          <Link to="/contact" style={ctaStyle}
            onMouseEnter={e => e.currentTarget.style.background = "var(--color-primary-dark)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--color-primary)"}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile: CTA always visible + hamburger */}
        <div className="mobile-nav-controls" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link to="/contact" style={{ ...ctaStyle, padding: "8px 14px", fontSize: "13px" }}>Contact</Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-secondary)", padding: "4px" }}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
          <nav className="site-container" style={{ paddingBlock: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {navLinks.map(link => (
              <Link key={link.href} to={link.href} onClick={close}
                style={{ fontSize: "15px", color: "var(--color-text-secondary)", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-controls { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}