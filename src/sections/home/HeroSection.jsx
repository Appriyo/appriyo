// sections/home/HeroSection.jsx
// Full implementation per design-system v2.0 + hero.md v2.0

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
    const id = requestAnimationFrame(() => {
      setTimeout(() => setStage(1), 60);
    });
    return () => cancelAnimationFrame(id);
  }, [reduced]);
  return stage;
}

// ─── Floating system nodes canvas ─────────────────────────────────────────
function FloatingNodes({ reduced }) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;

    const isMobile = W < 640;
    const COUNT    = isMobile ? 12 : 26;
    const MAX_DIST = isMobile ? 85 : 125;

    const nodes = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      r:  Math.random() * 1.4 + 0.7,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.038;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth   = 0.55;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.065)";
        ctx.fill();

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
      canvas.width  = W;
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
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        0,
      }}
    />
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function HeroSection() {
  const reduced   = useReducedMotion();
  const stage     = useStagedReveal(reduced);
  const sectionRef = useRef(null);
  const glowRef   = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Cursor-reactive glow parallax
  const onMouseMove = useCallback(
    (e) => {
      if (reduced || !glowRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const cx   = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
      const cy   = ((e.clientY - rect.top)   / rect.height - 0.5) * 2;
      glowRef.current.style.transform =
        `translate(calc(-50% + ${cx * 22}px), calc(-50% + ${cy * 16}px))`;
    },
    [reduced]
  );

  // Hide scroll indicator after scroll
  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      setScrolled(sectionRef.current.getBoundingClientRect().bottom < window.innerHeight * 0.55);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Staged fade-up factory: step × 110ms delay
  const reveal = (step, extra = {}) => ({
    opacity:   stage >= 1 ? 1 : 0,
    transform: stage >= 1 ? "translateY(0) scale(1)" : "translateY(24px) scale(0.975)",
    transition: reduced
      ? "none"
      : `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${step * 110}ms,
         transform 0.7s cubic-bezier(0.22,1,0.36,1) ${step * 110}ms`,
    ...extra,
  });

  // Press micro-interaction
  const press = {
    onMouseDown:  (e) => { e.currentTarget.style.transform = "scale(0.97)"; },
    onMouseUp:    (e) => { e.currentTarget.style.transform = ""; },
    onMouseLeave: (e) => { e.currentTarget.style.transform = ""; },
  };

  return (
    <>
      {/* ── CSS Variables + keyframes ───────────────────────────────────── */}
      <style>{`
        :root {
          --color-void:          #060912;
          --color-bg:            #0b0f1a;
          --color-surface:       #111827;
          --color-border:        #1e2d45;
          --color-primary:       #2563eb;
          --color-primary-bright:#3b82f6;
          --color-signal:        #06b6d4;
          --color-text-primary:  #f0f4ff;
          --color-text-secondary:#8fa3c0;
          --color-text-muted:    #4d6480;
          --glow-primary: 0 0 24px rgba(37,99,235,0.28), 0 0 48px rgba(37,99,235,0.12);
        }

        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.45; }
        }
        @keyframes grainShift {
          0%   { transform: translate(0, 0); }
          20%  { transform: translate(-2px, 2px); }
          40%  { transform: translate(2px, -1px); }
          60%  { transform: translate(-1px, 1px); }
          80%  { transform: translate(1px, -2px); }
          100% { transform: translate(0, 0); }
        }

        .hero-cta-primary,
        .hero-cta-secondary {
          transition:
            background-color 0.2s ease,
            border-color     0.2s ease,
            box-shadow       0.22s ease,
            transform        0.18s cubic-bezier(0.22,1,0.36,1) !important;
        }

        @media (max-width: 639px) {
          .hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            max-width: 340px;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
            justify-content: center;
            min-height: 52px;
          }
        }
      `}</style>

      {/* ── Hero Section ───────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        id="hero"
        onMouseMove={onMouseMove}
        style={{
          position:        "relative",
          minHeight:       "100svh",
          display:         "flex",
          flexDirection:   "column",
          alignItems:      "center",
          justifyContent:  "center",
          overflow:        "hidden",
          backgroundColor: "var(--color-bg)",
        }}
      >
        {/* ── Layer 1: Noise grain (depth + premium feel) ─────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset:    "-10%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.018'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize:   "200px 200px",
            animation:        reduced ? "none" : "grainShift 8s steps(1) infinite",
            pointerEvents:    "none",
            zIndex:           0,
            opacity:          0.7,
          }}
        />

        {/* ── Layer 2: Micro dot-grid (signature Appriyo texture) ──────── */}
        <div
          aria-hidden="true"
          style={{
            position:        "absolute",
            inset:           0,
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.055) 1px, transparent 1px)",
            backgroundSize:  "28px 28px",
            backgroundPosition: "center",
            filter:          "blur(0.3px)",
            pointerEvents:   "none",
            zIndex:          0,
          }}
        />

        {/* ── Layer 3: Hero mesh — radial blue from top ────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position:   "absolute",
            top:        "-10%",
            left:       "50%",
            transform:  "translateX(-50%)",
            width:      "900px",
            height:     "600px",
            background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(37,99,235,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex:     0,
          }}
        />

        {/* ── Layer 4: Soft off-center ambient glow ────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position:   "absolute",
            top:        "38%",
            left:       "54%",
            width:      "720px",
            height:     "480px",
            transform:  "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex:     0,
          }}
        />

        {/* ── Layer 5: Cursor-reactive focus glow ──────────────────────── */}
        <div
          ref={glowRef}
          aria-hidden="true"
          style={{
            position:   "absolute",
            top:        "44%",
            left:       "50%",
            width:      "520px",
            height:     "360px",
            transform:  "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)",
            filter:     "blur(36px)",
            pointerEvents: "none",
            zIndex:     0,
            transition: "transform 0.4s ease",
          }}
        />

        {/* ── Layer 6: Floating system nodes canvas ────────────────────── */}
        <FloatingNodes reduced={reduced} />

        {/* ── Content ──────────────────────────────────────────────────── */}
        <div
          style={{
            position:       "relative",
            zIndex:         1,
            width:          "100%",
            maxWidth:       "1200px",
            margin:         "0 auto",
            padding:        "calc(80px + clamp(40px, 7vw, 72px)) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 80px)",
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            textAlign:      "center",
          }}
        >

          {/* Mono section label — JetBrains Mono, cyan, ALL CAPS */}
          <div style={{ ...revealStyle(stage, reduced, 0), marginBottom: "14px" }}>
            <span
              style={{
                fontFamily:    "'JetBrains Mono', 'Courier New', monospace",
                fontSize:      "11px",
                fontWeight:    500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "var(--color-signal)",
              }}
            >
              // software solutions
            </span>
          </div>

          {/* AI-Powered badge */}
          <div
            style={{
              ...revealStyle(stage, reduced, 1),
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              marginBottom:   "28px",
              padding:        "5px 14px 5px 10px",
              borderRadius:   "999px",
              backgroundColor:"rgba(37,99,235,0.09)",
              border:         "1px solid rgba(37,99,235,0.2)",
              fontFamily:     "'DM Sans', system-ui, sans-serif",
              fontSize:       "12px",
              fontWeight:     500,
              letterSpacing:  "0.06em",
              textTransform:  "uppercase",
              color:          "#60a5fa",
            }}
          >
            <span
              style={{
                width:           "6px",
                height:          "6px",
                borderRadius:    "50%",
                backgroundColor: "#3b82f6",
                flexShrink:      0,
                animation:       reduced ? "none" : "badgePulse 2.4s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            AI-Powered Digital Transformation
          </div>

          {/* H1 — Syne 800, gradient white→blue-white, drop-shadow glow */}
          <h1
            style={{
              ...revealStyle(stage, reduced, 2),
              fontFamily:    "'Syne', system-ui, sans-serif",
              fontSize:      "clamp(40px, 6vw, 72px)",
              fontWeight:    800,
              lineHeight:    1.05,
              letterSpacing: "-0.025em",
              background:    "linear-gradient(165deg, #f0f4ff 45%, #bfdbfe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:  "transparent",
              backgroundClip:       "text",
              filter:        "drop-shadow(0 0 32px rgba(37,99,235,0.2))",
              maxWidth:      "720px",
              margin:        "0 auto 22px",
            }}
          >
            Still Running Your{" "}
            <span style={{ display: "block" }}>
              Business{" "}
              <em
                style={{
                  fontStyle:  "normal",
                  fontWeight: 800,
                  background: "linear-gradient(120deg, #93c5fd 0%, #60a5fa 60%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:       "text",
                }}
              >
                Manually?
              </em>
            </span>
          </h1>

          {/* Subheadline — DM Sans, muted */}
          <p
            style={{
              ...revealStyle(stage, reduced, 3),
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize:   "clamp(16px, 2vw, 19px)",
              fontWeight: 400,
              lineHeight: 1.7,
              color:      "#d1d5db",
              maxWidth:   "560px",
              margin:     "0 auto 10px",
            }}
          >
            Appriyo replaces paper, WhatsApp threads, and spreadsheets
            with simple, automated systems built for your business.
          </p>

          {/* Supporting line — IBM Plex Sans style, more muted */}
          <p
            style={{
              ...revealStyle(stage, reduced, 4),
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize:   "clamp(13px, 1.4vw, 15px)",
              fontWeight: 400,
              lineHeight: 1.7,
              color:      "var(--color-text-muted)",
              maxWidth:   "460px",
              margin:     "0 auto",
            }}
          >
            We work with small businesses and local service providers
            to eliminate repetitive work — no tech knowledge required.
          </p>

          {/* Spacer */}
          <div style={{ height: "clamp(28px, 4vw, 44px)" }} />

          {/* CTA row */}
          <div
            className="hero-cta-row"
            style={{
              ...revealStyle(stage, reduced, 5),
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "14px",
              flexWrap:       "wrap",
              marginBottom:   "22px",
            }}
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="hero-cta-primary"
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                justifyContent:  "center",
                padding:         "15px 28px",
                background:      "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e3a8a 100%)",
                color:           "#ffffff",
                borderRadius:    "9px",
                fontFamily:      "'DM Sans', system-ui, sans-serif",
                fontSize:        "15px",
                fontWeight:      500,
                textDecoration:  "none",
                whiteSpace:      "nowrap",
                minHeight:       "52px",
                cursor:          "pointer",
                border:          "1px solid rgba(59,130,246,0.22)",
                boxShadow:       "0 0 20px rgba(37,99,235,0.32), 0 4px 14px rgba(0,0,0,0.28)",
                letterSpacing:   "0.01em",
              }}
              {...press}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 32px rgba(37,99,235,0.5), 0 8px 24px rgba(0,0,0,0.35)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(37,99,235,0.32), 0 4px 14px rgba(0,0,0,0.28)";
                e.currentTarget.style.transform = "";
              }}
            >
              Let's Talk About Your Business
            </a>

            {/* Secondary CTA — glass style */}
            <a
              href="#products"
              className="hero-cta-secondary"
              style={{
                display:             "inline-flex",
                alignItems:          "center",
                justifyContent:      "center",
                padding:             "15px 28px",
                backgroundColor:     "rgba(255,255,255,0.03)",
                backdropFilter:      "blur(10px)",
                WebkitBackdropFilter:"blur(10px)",
                color:               "var(--color-text-secondary)",
                border:              "1px solid rgba(255,255,255,0.09)",
                borderRadius:        "9px",
                fontFamily:          "'DM Sans', system-ui, sans-serif",
                fontSize:            "15px",
                fontWeight:          500,
                textDecoration:      "none",
                whiteSpace:          "nowrap",
                minHeight:           "52px",
                cursor:              "pointer",
                letterSpacing:       "0.01em",
              }}
              {...press}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor     = "rgba(255,255,255,0.18)";
                e.currentTarget.style.color           = "var(--color-text-primary)";
                e.currentTarget.style.transform       = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor     = "rgba(255,255,255,0.09)";
                e.currentTarget.style.color           = "var(--color-text-secondary)";
                e.currentTarget.style.transform       = "";
              }}
            >
              See What We Build
            </a>
          </div>

          {/* Micro trust line */}
          <p
            style={{
              ...revealStyle(stage, reduced, 6),
              fontFamily:    "'JetBrains Mono', 'Courier New', monospace",
              fontSize:      "12px",
              fontWeight:    400,
              letterSpacing: "0.06em",
              color:         "var(--color-text-muted)",
              maxWidth:      "360px",
              margin:        "0 auto",
            }}
          >
            Real software. Real businesses. No complexity.
          </p>

          {/* Stats row — subtle proof points below trust line */}
          <div
            style={{
              ...revealStyle(stage, reduced, 7),
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "clamp(24px, 5vw, 60px)",
              marginTop:      "clamp(36px, 5vw, 56px)",
              paddingTop:     "clamp(24px, 3vw, 32px)",
              borderTop:      "1px solid var(--color-border)",
              width:          "100%",
              maxWidth:       "560px",
              flexWrap:       "wrap",
            }}
          >
            {[
              { num: "50+",  label: "Clients Served" },
              { num: "98%",  label: "On-Time Delivery" },
              { num: "5 yrs", label: "In Business" },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily:    "'Syne', system-ui, sans-serif",
                    fontSize:      "clamp(22px, 3vw, 30px)",
                    fontWeight:    800,
                    letterSpacing: "-0.03em",
                    color:         "var(--color-text-primary)",
                    textShadow:    "0 0 14px rgba(59,130,246,0.5)",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily:    "'JetBrains Mono', 'Courier New', monospace",
                    fontSize:      "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:         "var(--color-text-muted)",
                    marginTop:     "4px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section edge — 1px gradient divider (bottom) ─────────────── */}
        <div
          aria-hidden="true"
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            right:      0,
            height:     "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.22) 30%, rgba(6,182,212,0.15) 70%, transparent 100%)",
          }}
        />

        {/* ── Scroll indicator (pulse + bob chevron) ───────────────────── */}
        <button
          aria-label="Scroll to services"
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            position:        "absolute",
            bottom:          "32px",
            left:            "50%",
            transform:       "translateX(-50%)",
            cursor:          "pointer",
            opacity:         scrolled ? 0 : 1,
            pointerEvents:   scrolled ? "none" : "auto",
            transition:      "opacity 0.35s ease",
            zIndex:          2,
            background:      "none",
            border:          "none",
            padding:         "10px",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
          }}
        >
          {/* Pulse ring */}
          <span
            aria-hidden="true"
            style={{
              position:     "absolute",
              width:        "30px",
              height:       "30px",
              borderRadius: "50%",
              border:       "1px solid rgba(107,114,128,0.35)",
              animation:    reduced ? "none" : "pulseRing 2.2s ease-out infinite",
            }}
          />
          {/* Chevron */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-text-muted)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{
              position:  "relative",
              zIndex:    1,
              animation: reduced ? "none" : "scrollBob 1.8s ease-in-out infinite",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </section>
    </>
  );
}

// ─── Inline reveal helper (avoids repetition in JSX) ──────────────────────
function revealStyle(stage, reduced, step) {
  return {
    opacity:   stage >= 1 ? 1 : 0,
    transform: stage >= 1 ? "translateY(0) scale(1)" : "translateY(22px) scale(0.975)",
    transition: reduced
      ? "none"
      : `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${step * 110}ms,
         transform 0.7s cubic-bezier(0.22,1,0.36,1) ${step * 110}ms`,
  };
}