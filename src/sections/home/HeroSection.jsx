// sections/home/HeroSection.jsx
// Full implementation per hero.md v1.0

import { useEffect, useRef, useState } from "react";

// ─── Reduced-motion hook ───────────────────────────────────────────────────
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ─── Staggered fade-up hook ────────────────────────────────────────────────
function useFadeUp(reduced) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (reduced) { setVisible(true); return; }
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [reduced]);
  return visible;
}

export default function HeroSection() {
  const reduced = useReducedMotion();
  const visible = useFadeUp(reduced);
  const sectionRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Hide scroll indicator once user scrolls past hero
  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setScrolled(rect.bottom < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Shared fade-up item style factory
  const fadeItem = (delayMs) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: reduced
      ? "none"
      : `opacity 0.5s ease ${delayMs}ms, transform 0.5s ease ${delayMs}ms`,
  });

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        id="hero"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#0b0f19",
        }}
      >
        {/* Background dot grid */}
        <div aria-hidden="true" style={styles.bgPattern} />

        {/* Radial vignette — keeps edges darker than centre */}
        <div aria-hidden="true" style={styles.vignette} />

        {/* ─── Content ────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "calc(64px + clamp(48px, 8vw, 80px)) 24px clamp(48px, 6vw, 80px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Pre-heading badge */}
          <div style={{ ...styles.badge, ...fadeItem(0) }}>
            <span style={styles.badgeDot} aria-hidden="true" />
            AI-Powered Digital Transformation
          </div>

          {/* H1 */}
          <h1 style={{ ...styles.h1, ...fadeItem(100) }}>
            Still Running Your Business Manually?
          </h1>

          {/* Subheadline */}
          <p style={{ ...styles.subheadline, ...fadeItem(200) }}>
            Appriyo replaces paper, WhatsApp threads, and spreadsheets
            with simple, automated systems built for your business.
          </p>

          {/* Supporting line */}
          <p style={{ ...styles.supporting, ...fadeItem(300) }}>
            We work with small businesses and local service providers
            to eliminate repetitive work — no tech knowledge required.
          </p>

          {/* Vertical spacer */}
          <div style={{ height: "32px" }} />

          {/* CTA row */}
          <div style={{ ...styles.ctaRow, ...fadeItem(400) }}>
            <a
              href="#contact"
              style={styles.primaryCta}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
            >
              Let's Talk About Your Business
            </a>
            <a
              href="#products"
              style={styles.secondaryCta}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#111827";
                e.currentTarget.style.borderColor = "#374151";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "#1f2937";
              }}
            >
              See What We Build
            </a>
          </div>

          {/* Micro trust line */}
          <p style={{ ...styles.trust, ...fadeItem(500) }}>
            Real software. Real businesses. No complexity.
          </p>
        </div>

        {/* ─── Scroll indicator ───────────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            ...styles.scrollIndicator,
            opacity: scrolled ? 0 : 1,
            pointerEvents: scrolled ? "none" : "auto",
          }}
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: reduced ? "none" : "scrollBob 1.5s ease-in-out infinite" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ─── Global keyframes ─────────────────────────────────────────── */}
      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }

        /* Mobile: stack CTAs */
        @media (max-width: 639px) {
          .hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            max-width: 340px;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
            justify-content: center;
            min-height: 48px;
          }
        }

        /* Tablet+: side-by-side */
        @media (min-width: 640px) {
          .hero-cta-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </>
  );
}

// ─── Static style objects (avoids re-creation on render) ──────────────────
const styles = {
  bgPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    backgroundPosition: "center",
    pointerEvents: "none",
  },

  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(11,15,25,0.65) 100%)",
    pointerEvents: "none",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
    padding: "5px 12px",
    borderRadius: "999px",
    backgroundColor: "rgba(37,99,235,0.12)",
    border: "1px solid rgba(37,99,235,0.25)",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#60a5fa",
  },

  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    flexShrink: 0,
  },

  h1: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "clamp(36px, 5vw, 56px)",
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    color: "#f9fafb",
    maxWidth: "680px",
    margin: "0 auto 20px",
  },

  subheadline: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "clamp(17px, 2vw, 20px)",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "#f9fafb",
    maxWidth: "560px",
    margin: "0 auto 12px",
  },

  supporting: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "clamp(15px, 1.5vw, 16px)",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "#9ca3af",
    maxWidth: "480px",
    margin: "0 auto",
  },

  ctaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "16px",
  },

  primaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 24px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    borderRadius: "8px",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "15px",
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    minHeight: "48px",
    transition: "background-color 0.2s ease",
    cursor: "pointer",
  },

  secondaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 24px",
    backgroundColor: "transparent",
    color: "#f9fafb",
    border: "1px solid #1f2937",
    borderRadius: "8px",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "15px",
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    minHeight: "48px",
    transition: "background-color 0.2s ease, border-color 0.2s ease",
    cursor: "pointer",
  },

  trust: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "0.02em",
    color: "#6b7280",
    maxWidth: "360px",
    margin: "0 auto",
  },

  scrollIndicator: {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    zIndex: 2,
    padding: "8px",
  },
};