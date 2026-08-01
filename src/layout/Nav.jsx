// src/layout/Nav.jsx — DESIGN.md §9 + CONTENT_STRATEGY.md §3.1
//
// Sticky (not fixed) so it sits in document flow and no spacer div is
// needed. The bottom rule is a 1px border that toggles on scroll via
// useScrolled; we never use a shadow or glow effect — DESIGN.md §3.3.
//
// Mobile menu is a fixed overlay so opening it causes NO layout shift
// in the page content. Body scroll is locked while open; Escape closes
// the panel; clicking a link or CTA also closes it.
//
// Language toggle:
//   * Desktop: a slim LanguageSwitcher (variant="navbar") sits in the
//     primary nav row, between the CTA and the right edge of the screen.
//   * Mobile:  a full-width LanguageSwitcher (variant="mobile") is the
//     LAST row inside the mobile panel, below the CTA, so it has its own
//     breathing room and doesn't compete with the link list.
//   * Selecting a language from the mobile menu auto-closes the panel.
//   * Labels (Services, Products, About, "Talk to us", hamburger aria
//     labels, mobile-nav aria-label) all translate via useLanguage.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LanguageSwitcher from "../components/ui/LanguageSwitcher";
import { useScrolled } from "../hooks/useScrolled";
import { useLanguage } from "../i18n/hooks";
import { navLinks, ctaLink } from "../data/nav";

function HamburgerIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <line
        x1="3" y1={open ? "11" : "7"} x2="19" y2={open ? "11" : "7"}
        stroke="currentColor" strokeWidth="1.75"
        style={{ transition: "transform 150ms", transform: open ? "rotate(45deg)" : "none" }}
      />
      <line
        x1="3" y1={open ? "11" : "15"} x2="19" y2={open ? "11" : "15"}
        stroke="currentColor" strokeWidth="1.75"
        style={{ transition: "transform 150ms", transform: open ? "rotate(-45deg)" : "none" }}
      />
    </svg>
  );
}

export default function Nav() {
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);

  // useLanguage("navigation") scopes the t() lookup to the navigation
  // namespace. The first argument to useTranslation() is the namespace,
  // not a translation key — we then pass full keys like
  // "navigation.services" to t(). This keeps the call site readable and
  // matches the structure of src/data/nav.js where labelKey is the full
  // dot-path.
  const { t } = useLanguage("navigation");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 bg-paper font-body ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-[20px] text-ink leading-none"
        >
          Appriyo
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label={t("navigation.primary")}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-[15px] text-ink hover:text-ink-soft"
            >
              {t(l.labelKey)}
            </Link>
          ))}
          <Button href={ctaLink.href}>{t(ctaLink.labelKey)}</Button>

          {/* Language toggle. variant="navbar" matches the nav row's
              ink-on-paper aesthetic — no border, hover washes paper-dim,
              same focus ring as Button.jsx. */}
          <LanguageSwitcher variant="navbar" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("navigation.closeMenu") : t("navigation.openMenu")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed top-16 inset-x-0 z-30 bg-paper border-b border-line"
        >
          <nav
            aria-label={t("navigation.primaryMobile")}
            className="mx-auto max-w-7xl px-6 py-4 flex flex-col"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={close}
                className="py-3 text-[15px] text-ink"
              >
                {t(l.labelKey)}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Button href={ctaLink.href} onClick={close}>
                {t(ctaLink.labelKey)}
              </Button>
            </div>

            {/* Mobile language toggle. variant="mobile" is a full-width
                pill with its own border so it visually separates from the
                link list above. onSelect closes the mobile panel so the
                user sees the language change take effect immediately. */}
            <div className="pt-2">
              <LanguageSwitcher variant="mobile" onSelect={close} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
