// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navigation";
import { useScrolled } from "../../hooks/useScrolled";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(1);
  const { pathname } = useLocation();
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  const close = () => setOpen(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close drawer on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "64px",
          background: scrolled ? "rgba(17, 24, 39, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid #1f2937"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={close}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "#f9fafb",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              flexShrink: 0,
            }}
          >
            Appriyo
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="appriyo-desktop-nav"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                active={isActive(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
            <CtaButton to="/contact" onClick={close}>
              Contact
            </CtaButton>
          </nav>

          {/* Mobile Controls */}
          <div
            className="appriyo-mobile-controls"
            style={{
              display: "none",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <CtaButton to="/contact" onClick={close} small>
              Contact
            </CtaButton>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#d1d5db",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                transition: "color 0s",
                lineHeight: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f9fafb")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 4L16 16M16 4L4 16"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 5h14M3 10h14M3 15h14"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        ref={backdropRef}
        aria-hidden="true"
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 48,
          background: "rgba(0, 0, 0, 0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.2s",
        }}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 49,
          width: "280px",
          maxWidth: "85vw",
          background: "#111827",
          borderLeft: "1px solid #1f2937",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.2s ease",
          display: "flex",
          flexDirection: "column",
          paddingTop: "80px",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "8px 0",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={close}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                color: isActive(link.href) ? "#2563eb" : "#d1d5db",
                textDecoration: "none",
                padding: "16px 24px",
                borderBottom: "1px solid #1f2937",
                transition: "color 0s, background 0s",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.color = "#2563eb";
                  e.currentTarget.style.background = "rgba(37,99,235,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.color = "#d1d5db";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: "20px 24px" }}>
            <Link
              to="/contact"
              onClick={close}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 20px",
                background: "#2563eb",
                color: "#ffffff",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "Inter, system-ui, sans-serif",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1e40af")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#2563eb")
              }
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .appriyo-desktop-nav { display: flex !important; }
          .appriyo-mobile-controls { display: none !important; }
        }
        @media (max-width: 767px) {
          .appriyo-desktop-nav { display: none !important; }
          .appriyo-mobile-controls { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "16px",
        fontWeight: 500,
        color: active ? "#2563eb" : "#9ca3af",
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.color = "#2563eb";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.color = "#9ca3af";
      }}
    >
      {children}
    </Link>
  );
}

function CtaButton({ to, onClick, children, small = false }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: small ? "7px 14px" : "8px 16px",
        background: "#2563eb",
        color: "#ffffff",
        borderRadius: "8px",
        fontSize: small ? "14px" : "16px",
        fontWeight: 500,
        fontFamily: "Inter, system-ui, sans-serif",
        textDecoration: "none",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#1e40af")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
    >
      {children}
    </Link>
  );
}