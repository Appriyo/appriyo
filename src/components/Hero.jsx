// src/components/Hero.jsx
// Aligned with: hero.md v1.0 · design.md v1.0 · pages.md v1.0

import React, { useEffect, useRef, useState } from "react";
import { HERO_CONTENT } from "../data/heroContent";

// ─── Scroll Indicator ───────────────────────────────────────────────────────

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to services"
      style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        padding: "8px",
        color: "var(--color-text-muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ animation: "heroBob 1.5s ease-in-out infinite" }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

// ─── Pre-Heading Badge ───────────────────────────────────────────────────────

function PreHeadingBadge({ children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 14px",
        borderRadius: "999px",
        background: "rgba(37,99,235,0.1)",
        border: "1px solid rgba(37,99,235,0.25)",
        marginBottom: "16px",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--color-primary)",
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--color-primary)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    // Small delay so all elements are in DOM before animating
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handlePrimaryCTA = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondaryCTA = (e) => {
    e.preventDefault();
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Staggered fade-up delays (ms)
  const delays = prefersReducedMotion
    ? [0, 0, 0, 0, 0, 0]
    : [0, 100, 200, 300, 400, 500];

  const itemStyle = (idx) => ({
    opacity: mounted || prefersReducedMotion ? 1 : 0,
    transform:
      mounted || prefersReducedMotion ? "translateY(0)" : "translateY(20px)",
    transition: prefersReducedMotion
      ? "none"
      : `opacity 0.5s ease ${delays[idx]}ms, transform 0.5s ease ${delays[idx]}ms`,
  });

  return (
    <>
      {/* ── Global styles injected once ─────────────────────────────────── */}
      <style>{`
        :root {
          --color-primary:        #2563eb;
          --color-primary-dark:   #1e40af;
          --color-primary-light:  #3b82f6;
          --color-bg:             #0b0f19;
          --color-surface:        #111827;
          --color-border:         #1f2937;
          --color-text-primary:   #f9fafb;
          --color-text-secondary: #9ca3af;
          --color-text-muted:     #6b7280;
          --font-sans:            'Inter', system-ui, sans-serif;
        }

        @keyframes heroBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: background 200ms ease;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          background: var(--color-primary-dark);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          background: transparent;
          color: var(--color-text-primary);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: background 200ms ease, border-color 200ms ease;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          background: var(--color-surface);
        }

        /* Mobile CTA stacking */
        @media (max-width: 639px) {
          .hero-cta-row {
            flex-direction: column !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
          }
        }
      `}</style>

      {/* ── Section ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Main introduction"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "var(--color-bg)",
          // Dot grid pattern per hero.md §4.1
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "center",
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* ── Content container ───────────────────────────────────────── */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 24px 96px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* 1. Pre-heading badge */}
          <div style={itemStyle(0)}>
            <PreHeadingBadge>{HERO_CONTENT.preHeading}</PreHeadingBadge>
          </div>

          {/* 2. H1 Headline */}
          <h1
            style={{
              ...itemStyle(1),
              maxWidth: "680px",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              margin: "0 0 20px",
            }}
          >
            {HERO_CONTENT.headline}
          </h1>

          {/* 3. Subheadline */}
          <p
            style={{
              ...itemStyle(2),
              maxWidth: "560px",
              fontSize: "clamp(17px, 2vw, 20px)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "var(--color-text-primary)",
              margin: "0 0 12px",
            }}
          >
            {HERO_CONTENT.subheadline}
          </p>

          {/* 4. Supporting description */}
          <p
            style={{
              ...itemStyle(3),
              maxWidth: "480px",
              fontSize: "clamp(15px, 1.5vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              margin: "0",
            }}
          >
            {HERO_CONTENT.supportingLine}
          </p>

          {/* Vertical spacer before CTAs */}
          <div style={{ height: "32px" }} />

          {/* 5. CTAs */}
          <div
            className="hero-cta-row"
            style={{
              ...itemStyle(4),
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="#contact"
              onClick={handlePrimaryCTA}
              className="hero-btn-primary"
              aria-label={HERO_CONTENT.ctas.primary.aria}
            >
              {HERO_CONTENT.ctas.primary.text}
            </a>
            <a
              href="#products"
              onClick={handleSecondaryCTA}
              className="hero-btn-secondary"
              aria-label={HERO_CONTENT.ctas.secondary.aria}
            >
              {HERO_CONTENT.ctas.secondary.text}
            </a>
          </div>

          {/* 16px gap */}
          <div style={{ height: "16px" }} />

          {/* 6. Micro trust line */}
          <p
            style={{
              ...itemStyle(5),
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            {HERO_CONTENT.microTrust}
          </p>
        </div>

        {/* ── Scroll indicator ────────────────────────────────────────── */}
        <ScrollIndicator />
      </section>
    </>
  );
};

export default Hero;