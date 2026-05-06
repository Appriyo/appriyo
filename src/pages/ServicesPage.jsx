// src/pages/ServicesPage.jsx
// Aligned with: services-guide.md · pages.md v1.0 · design.md v1.0

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SERVICES_PAGE_CONTENT } from "../data/servicesPageContent";

// ─── Check icon ──────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(37,99,235,0.12)" />
      <path
        d="M4.5 7.5l2 2 4-4"
        stroke="#2563eb"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Dot icon (for examples list) ────────────────────────────────────────────
function DotIcon() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "#6b7280",
        flexShrink: 0,
        marginTop: "8px",
      }}
    />
  );
}

// ─── Arrow-right CTA link ─────────────────────────────────────────────────────
function ServiceCTA({ label, href }) {
  const arrowRef = useRef(null);

  return (
    <Link
      to={href}
      onMouseEnter={() => {
        if (arrowRef.current)
          arrowRef.current.style.transform = "translateX(4px)";
      }}
      onMouseLeave={() => {
        if (arrowRef.current)
          arrowRef.current.style.transform = "translateX(0)";
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "15px",
        fontWeight: 500,
        color: "#2563eb",
        textDecoration: "none",
        fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
        padding: "8px 0", // ensures 44px-ish tap target with surrounding spacing
      }}
      onFocus={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onBlur={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      {label}
      <svg
        ref={arrowRef}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        style={{ transition: "transform 0.2s ease" }}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

// ─── Individual service section ───────────────────────────────────────────────
function ServiceSection({ service, isLast }) {
  return (
    <section
      aria-labelledby={`service-${service.id}`}
      style={{
        borderTop: "1px solid #1f2937",
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingBottom: isLast ? 0 : "clamp(48px, 6vw, 80px)",
      }}
    >
      {/* Service name + one-liner */}
      <h2
        id={`service-${service.id}`}
        style={{
          fontSize: "clamp(22px, 3vw, 28px)",
          fontWeight: 600,
          color: "#f9fafb",
          marginBottom: "10px",
          lineHeight: 1.25,
          fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
        }}
      >
        {service.title}
      </h2>
      <p
        style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          fontWeight: 500,
          color: "#2563eb",
          marginBottom: "20px",
          fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
        }}
      >
        {service.oneLiner}
      </p>

      {/* What it is */}
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: "#9ca3af",
          maxWidth: "680px",
          marginBottom: "28px",
          fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
        }}
      >
        {service.whatItIs}
      </p>

      {/* Two-column grid: examples + outcomes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "32px 48px",
          marginBottom: "28px",
        }}
      >
        {/* Examples */}
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: "12px",
              fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
            }}
          >
            Examples
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {service.examples.map((ex, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "14px",
                  color: "#9ca3af",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
                }}
              >
                <DotIcon />
                {ex}
              </li>
            ))}
          </ul>
        </div>

        {/* What you get */}
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: "12px",
              fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
            }}
          >
            What you get
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {service.outcomes.map((out, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "14px",
                  color: "#9ca3af",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
                }}
              >
                <CheckIcon />
                {out}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Service CTA */}
      <ServiceCTA label={service.cta.label} href={service.cta.href} />
    </section>
  );
}

// ─── Services page ─────────────────────────────────────────────────────────────
const ServicesPage = () => {
  const { header, services, notIncluded, finalCta } = SERVICES_PAGE_CONTENT;

  return (
    <>
      <style>{`
        :root {
          --font-sans: 'Inter', system-ui, sans-serif;
          --color-bg: #0b0f19;
          --color-surface: #111827;
          --color-border: #1f2937;
          --color-text-primary: #f9fafb;
          --color-text-secondary: #9ca3af;
          --color-text-muted: #6b7280;
          --color-primary: #2563eb;
          --color-primary-dark: #1e40af;
        }

        .services-final-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: background 0s;
          min-height: 44px;
        }
        .services-final-btn:hover {
          background: #1e40af;
        }

        @media (max-width: 639px) {
          .services-final-btn {
            width: 100%;
          }
        }
      `}</style>

      <div
        style={{
          backgroundColor: "#0b0f19",
          minHeight: "100vh",
          fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >

          {/* ── Page header ──────────────────────────────────────────────── */}
          <header
            style={{
              textAlign: "center",
              paddingTop: "clamp(64px, 8vw, 96px)",
              paddingBottom: "clamp(40px, 6vw, 64px)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: "16px",
              }}
            >
              {header.eyebrow}
            </p>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#f9fafb",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
                maxWidth: "640px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {header.title}
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "#9ca3af",
                lineHeight: 1.6,
                maxWidth: "560px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {header.description}
            </p>
          </header>

          {/* ── Four service sections ─────────────────────────────────────── */}
          <main>
            {services.map((service, idx) => (
              <ServiceSection
                key={service.id}
                service={service}
                isLast={idx === services.length - 1}
              />
            ))}
          </main>

          {/* ── What we don't do ──────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "clamp(48px, 6vw, 80px)",
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "12px",
              padding: "clamp(16px, 3vw, 28px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(17px, 2vw, 20px)",
                fontWeight: 500,
                color: "#f9fafb",
                marginBottom: "12px",
              }}
            >
              {notIncluded.heading}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                lineHeight: 1.7,
                maxWidth: "680px",
              }}
            >
              {notIncluded.body}
            </p>
          </div>

          {/* ── Final CTA block ───────────────────────────────────────────── */}
          <div
            style={{
              borderTop: "1px solid #1f2937",
              marginTop: "clamp(48px, 6vw, 80px)",
              paddingTop: "clamp(48px, 6vw, 80px)",
              paddingBottom: "clamp(48px, 6vw, 96px)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 600,
                color: "#f9fafb",
                lineHeight: 1.25,
                maxWidth: "560px",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "16px",
              }}
            >
              {finalCta.heading}
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#9ca3af",
                lineHeight: 1.6,
                maxWidth: "440px",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "32px",
              }}
            >
              {finalCta.body}
            </p>
            <Link to={finalCta.href} className="services-final-btn">
              {finalCta.button}
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;