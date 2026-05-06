// sections/home/HeroSection.jsx
// Full implementation per hero.md v2.0 — "Same brain. Better face."

import { useEffect, useRef, useState, useCallback } from "react";

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

// ─── Staged reveal hook ────────────────────────────────────────────────────
function useStagedReveal(reduced) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (reduced) { setStage(99); return; }
    const id = requestAnimationFrame(() => setStage(1));
    return () => cancelAnimationFrame(id);
  }, [reduced]);
  return stage;
}

// ─── Floating nodes canvas ─────────────────────────────────────────────────
function FloatingNodes({ reduced }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    // Detect mobile for fewer nodes
    const isMobile = W < 640;
    const COUNT = isMobile ? 14 : 28;

    const nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.5 + 0.8,
    }));

    const MAX_DIST = isMobile ? 90 : 130;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.045;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96, 165, 250, 0.07)";
        ctx.fill();

        // Update position
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function HeroSection() {
  const reduced = useReducedMotion();
  const stage = useStagedReveal(reduced);
  const sectionRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Cursor parallax glow
  const glowRef = useRef(null);
  const onMouseMove = useCallback(
    (e) => {
      if (reduced || !glowRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const cx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;  // -1..1
      const cy = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      glowRef.current.style.transform = `translate(calc(-50% + ${cx * 18}px), calc(-50% + ${cy * 14}px))`;
    },
    [reduced]
  );

  // Scroll indicator logic
  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      setScrolled(sectionRef.current.getBoundingClientRect().bottom < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Shared staged fade-up factory
  const reveal = (step, extraStyle = {}) => ({
    opacity: stage >= 1 ? 1 : 0,
    transform: stage >= 1 ? "translateY(0) scale(1)" : "translateY(22px) scale(0.98)",
    transition: reduced
      ? "none"
      : `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${step * 110}ms,
         transform 0.65s cubic-bezier(0.22,1,0.36,1) ${step * 110}ms`,
    ...extraStyle,
  });

  // Press micro-interaction
  const pressHandlers = {
    onMouseDown: (e) => { e.currentTarget.style.transform = "scale(0.98)"; },
    onMouseUp:   (e) => { e.currentTarget.style.transform = ""; },
    onMouseLeave:(e) => { e.currentTarget.style.transform = ""; },
  };

  return (
    <>
      {/* ─── Hero Section ──────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        id="hero"
        onMouseMove={onMouseMove}
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
        {/* Layer 1 — Noise grain (subtle depth) */}
        <div aria-hidden="true" style={styles.noise} />

        {/* Layer 2 — Micro grid */}
        <div aria-hidden="true" style={styles.bgGrid} />

        {/* Layer 3 — Soft off-center radial glow */}
        <div aria-hidden="true" style={styles.ambientGlow} />

        {/* Layer 4 — Cursor-reactive focus glow behind headline */}
        <div
          ref={glowRef}
          aria-hidden="true"
          style={styles.focusGlow}
        />

        {/* Layer 5 — Floating system nodes */}
        <FloatingNodes reduced={reduced} />

        {/* ─── Content ─────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding:
              "calc(64px + clamp(48px, 8vw, 80px)) 24px clamp(48px, 6vw, 80px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Pre-heading badge */}
          <div style={{ ...styles.badge, ...reveal(0) }}>
            <span style={styles.badgeDot} aria-hidden="true" />
            AI-Powered Digital Transformation
          </div>

          {/* H1 — with subtle gradient tint + glow */}
          <h1 style={{ ...styles.h1, ...reveal(1) }}>
            Still Running Your{" "}
            <span style={{ display: "block" }}>
              Business{" "}
              <em style={styles.h1Emphasis}>Manually?</em>
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{ ...styles.subheadline, ...reveal(2) }}>
            Appriyo replaces paper, WhatsApp threads, and spreadsheets
            with simple, automated systems built for your business.
          </p>

          {/* Supporting line */}
          <p style={{ ...styles.supporting, ...reveal(3) }}>
            We work with small businesses and local service providers
            to eliminate repetitive work — no tech knowledge required.
          </p>

          <div style={{ height: "36px" }} />

          {/* CTA row */}
          <div className="hero-cta-row" style={{ ...styles.ctaRow, ...reveal(4) }}>
            {/* Primary CTA */}
            <a
              href="#contact"
              className="hero-cta-primary"
              style={styles.primaryCta}
              {...pressHandlers}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1d4ed8";
                e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(37,99,235,0.45), 0 4px 16px rgba(0,0,0,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.boxShadow = styles.primaryCta.boxShadow;
                e.currentTarget.style.transform = "";
              }}
            >
              Let's Talk About Your Business
            </a>

            {/* Secondary CTA — glass style */}
            <a
              href="#products"
              className="hero-cta-secondary"
              style={styles.secondaryCta}
              {...pressHandlers}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "";
              }}
            >
              See What We Build
            </a>
          </div>

          {/* Micro trust line */}
          <p style={{ ...styles.trust, ...reveal(5) }}>
            Real software. Real businesses. No complexity.
          </p>
        </div>

        {/* ─── Scroll indicator (upgraded — pulsing glow) ──────────────── */}
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
          <div style={styles.scrollPulse} />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: "relative",
              zIndex: 1,
              animation: reduced ? "none" : "scrollBob 1.6s ease-in-out infinite",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ─── Global keyframes ──────────────────────────────────────────── */}
      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(7px); }
        }

        @keyframes pulseRing {
          0%   { transform: scale(0.7); opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
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
            min-height: 52px;
          }
        }

        /* Tablet+: side-by-side */
        @media (min-width: 640px) {
          .hero-cta-row {
            flex-direction: row !important;
          }
        }

        /* CTA transition */
        .hero-cta-primary,
        .hero-cta-secondary {
          transition: background-color 0.22s ease,
                      border-color 0.22s ease,
                      box-shadow 0.22s ease,
                      transform 0.18s cubic-bezier(0.22,1,0.36,1) !important;
        }
      `}</style>
    </>
  );
}

// ─── Static style objects ──────────────────────────────────────────────────
const styles = {
  // Grain noise layer
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
    backgroundSize: "128px 128px",
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.6,
  },

  // Blurred micro grid
  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)",
    backgroundSize: "36px 36px",
    backgroundPosition: "center",
    filter: "blur(0.4px)",
    pointerEvents: "none",
    zIndex: 0,
  },

  // Soft off-center ambient radial glow
  ambientGlow: {
    position: "absolute",
    top: "30%",
    left: "52%",
    width: "700px",
    height: "500px",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(ellipse at center, rgba(37,99,235,0.09) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  // Cursor-reactive focus glow (behind headline)
  focusGlow: {
    position: "absolute",
    top: "44%",
    left: "50%",
    width: "480px",
    height: "340px",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(ellipse at center, rgba(37,99,235,0.11) 0%, transparent 68%)",
    filter: "blur(32px)",
    pointerEvents: "none",
    zIndex: 0,
    transition: "transform 0.35s ease",
  },

  // Badge
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
    padding: "5px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(37,99,235,0.1)",
    border: "1px solid rgba(37,99,235,0.22)",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    color: "#60a5fa",
  },

  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    flexShrink: 0,
    animation: "badgePulse 2.2s ease-in-out infinite",
  },

  // H1 — white with subtle blue-white gradient + soft text glow
  h1: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "clamp(36px, 5vw, 58px)",
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: "-0.025em",
    // Subtle gradient: near-white → cool blue-white
    background: "linear-gradient(160deg, #f9fafb 55%, #bfdbfe 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    // Soft glow behind text (text-shadow doesn't work with gradient clip; use filter instead)
    filter: "drop-shadow(0 0 28px rgba(37,99,235,0.18))",
    maxWidth: "680px",
    margin: "0 auto 20px",
  },

  // Emphasized word — slight color shift + weight increase
  h1Emphasis: {
    fontStyle: "normal",
    fontWeight: 800,
    background: "linear-gradient(120deg, #93c5fd, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subheadline: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "clamp(17px, 2vw, 20px)",
    fontWeight: 400,
    lineHeight: 1.65,
    color: "#e5e7eb",
    maxWidth: "560px",
    margin: "0 auto 12px",
  },

  supporting: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "clamp(14px, 1.5vw, 16px)",
    fontWeight: 400,
    lineHeight: 1.65,
    color: "#9ca3af",
    maxWidth: "480px",
    margin: "0 auto",
  },

  ctaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  // Primary CTA — with depth shadow + glow
  primaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 26px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    borderRadius: "9px",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "15px",
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    minHeight: "52px",
    cursor: "pointer",
    boxShadow:
      "0 0 18px rgba(37,99,235,0.3), 0 4px 12px rgba(0,0,0,0.25)",
  },

  // Secondary CTA — glass style
  secondaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 26px",
    backgroundColor: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    color: "#f3f4f6",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "9px",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "15px",
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    minHeight: "52px",
    cursor: "pointer",
  },

  trust: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "0.025em",
    color: "#6b7280",
    maxWidth: "360px",
    margin: "0 auto",
  },

  // Scroll indicator wrapper
  scrollIndicator: {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    zIndex: 2,
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // Pulse ring behind chevron
  scrollPulse: {
    position: "absolute",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border: "1px solid rgba(107,114,128,0.4)",
    animation: "pulseRing 2s ease-out infinite",
  },
};