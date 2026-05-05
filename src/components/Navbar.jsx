// src/components/Navbar.jsx
// Aligned with: navbar.md v1.0 · design.md v1.0 · content.md v1.0

import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Services",  path: "/services"  },
  { label: "Solutions", path: "/solutions" },
  { label: "Products",  path: "/work"      },
  { label: "About",     path: "/about"     },
];

// ─── Hamburger Icon ─────────────────────────────────────────────────────────
function HamburgerIcon({ open }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="3" y1="3" x2="19" y2="19" />
          <line x1="19" y1="3" x2="3" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="16" x2="19" y2="16" />
        </>
      )}
    </svg>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close drawer on route change ──────────────────────────────────────────
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // ── Trap focus & close on Escape ──────────────────────────────────────────
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        /* ── Navbar base ─────────────────────────────────────────────── */
        .appriyo-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 64px;
          display: flex;
          align-items: center;
          transition: background 0s, border-color 0s; /* instant per spec */
          font-family: 'Inter', system-ui, sans-serif;
        }
        .appriyo-navbar--scrolled {
          background: #111827;
          border-bottom: 1px solid #1f2937;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .appriyo-navbar--top {
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        /* ── Inner container ─────────────────────────────────────────── */
        .appriyo-navbar__inner {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Logo ────────────────────────────────────────────────────── */
        .appriyo-navbar__logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .appriyo-navbar__logo img {
          height: 36px;
          width: auto;
          object-fit: contain;
        }
        .appriyo-navbar__logo-text {
          font-size: 20px;
          font-weight: 700;
          color: #f9fafb;
          letter-spacing: -0.02em;
        }

        /* ── Desktop nav links ───────────────────────────────────────── */
        .appriyo-navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .appriyo-navbar__link {
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 6px;
          transition: color 0s; /* instant per spec */
          color: #9ca3af;
        }
        .appriyo-navbar__link:hover {
          color: #f9fafb;
        }
        .appriyo-navbar__link--active {
          color: #2563eb !important;
        }

        /* ── CTA button ──────────────────────────────────────────────── */
        .appriyo-navbar__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0s; /* instant per spec */
        }
        .appriyo-navbar__cta:hover {
          background: #1e40af;
        }

        /* ── Hamburger button ────────────────────────────────────────── */
        .appriyo-navbar__hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #f9fafb;
          flex-shrink: 0;
          padding: 0;
        }
        .appriyo-navbar__hamburger:hover {
          background: rgba(255,255,255,0.06);
        }

        /* ── Mobile right cluster ────────────────────────────────────── */
        .appriyo-navbar__mobile-right {
          display: none;
          align-items: center;
          gap: 8px;
        }

        /* ── Responsive breakpoint ───────────────────────────────────── */
        @media (max-width: 767px) {
          .appriyo-navbar__links       { display: none !important; }
          .appriyo-navbar__cta.desktop { display: none !important; }
          .appriyo-navbar__mobile-right{ display: flex; }
          .appriyo-navbar__hamburger   { display: flex; }
        }

        /* ── Backdrop ────────────────────────────────────────────────── */
        .appriyo-backdrop {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0,0,0,0.6);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        .appriyo-backdrop--open {
          opacity: 1;
          pointer-events: all;
        }

        /* ── Drawer ──────────────────────────────────────────────────── */
        .appriyo-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 201;
          width: 280px;
          max-width: 85vw;
          background: #111827;
          border-left: 1px solid #1f2937;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.2s ease;
        }
        .appriyo-drawer--open {
          transform: translateX(0);
        }

        /* ── Drawer header ───────────────────────────────────────────── */
        .appriyo-drawer__header {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          border-bottom: 1px solid #1f2937;
          flex-shrink: 0;
        }
        .appriyo-drawer__logo-text {
          font-size: 18px;
          font-weight: 700;
          color: #f9fafb;
          letter-spacing: -0.02em;
        }
        .appriyo-drawer__close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          padding: 0;
        }
        .appriyo-drawer__close:hover {
          color: #f9fafb;
          background: rgba(255,255,255,0.06);
        }

        /* ── Drawer links ────────────────────────────────────────────── */
        .appriyo-drawer__links {
          flex: 1;
          overflow-y: auto;
          padding: 12px 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .appriyo-drawer__link {
          display: block;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          color: #9ca3af;
          padding: 14px 16px;
          border-radius: 8px;
          transition: color 0s, background 0s;
        }
        .appriyo-drawer__link:hover {
          color: #f9fafb;
          background: rgba(255,255,255,0.05);
        }
        .appriyo-drawer__link--active {
          color: #2563eb !important;
          background: rgba(37,99,235,0.08);
        }

        /* ── Drawer footer CTA ───────────────────────────────────────── */
        .appriyo-drawer__footer {
          padding: 16px 20px;
          border-top: 1px solid #1f2937;
          flex-shrink: 0;
        }
        .appriyo-drawer__cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 16px;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: background 0s;
        }
        .appriyo-drawer__cta:hover {
          background: #1e40af;
        }
      `}</style>

      {/* ── Backdrop ────────────────────────────────────────────────────── */}
      <div
        className={`appriyo-backdrop ${drawerOpen ? "appriyo-backdrop--open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Drawer ──────────────────────────────────────────────────────── */}
      <nav
        ref={drawerRef}
        className={`appriyo-drawer ${drawerOpen ? "appriyo-drawer--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
      >
        <div className="appriyo-drawer__header">
          <span className="appriyo-drawer__logo-text">Appriyo</span>
          <button
            className="appriyo-drawer__close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="16" y2="16" />
              <line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          </button>
        </div>

        <div className="appriyo-drawer__links">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`appriyo-drawer__link ${isActive(item.path) ? "appriyo-drawer__link--active" : ""}`}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="appriyo-drawer__footer">
          <NavLink
            to="/contact"
            className="appriyo-drawer__cta"
            onClick={() => setDrawerOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </nav>

      {/* ── Navbar bar ──────────────────────────────────────────────────── */}
      <header
        className={`appriyo-navbar ${scrolled ? "appriyo-navbar--scrolled" : "appriyo-navbar--top"}`}
        role="banner"
      >
        <div className="appriyo-navbar__inner">

          {/* Logo */}
          <NavLink to="/" className="appriyo-navbar__logo" aria-label="Appriyo home">
            {/* Swap the img for your actual logo file. If it doesn't exist yet,
                the text fallback below renders instead. */}
            <span className="appriyo-navbar__logo-text">Appriyo</span>
          </NavLink>

          {/* Desktop nav links */}
          <ul className="appriyo-navbar__links" role="list">
            {NAV_LINKS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`appriyo-navbar__link ${isActive(item.path) ? "appriyo-navbar__link--active" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — always visible on desktop */}
          <NavLink to="/contact" className="appriyo-navbar__cta desktop">
            Contact
          </NavLink>

          {/* Mobile: CTA + hamburger */}
          <div className="appriyo-navbar__mobile-right">
            <NavLink to="/contact" className="appriyo-navbar__cta">
              Contact
            </NavLink>
            <button
              className="appriyo-navbar__hamburger"
              onClick={() => setDrawerOpen((v) => !v)}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
            >
              <HamburgerIcon open={drawerOpen} />
            </button>
          </div>

        </div>
      </header>

      {/* Spacer so page content doesn't sit under the fixed navbar */}
      <div style={{ height: "64px" }} aria-hidden="true" />
    </>
  );
};

export default Navbar;