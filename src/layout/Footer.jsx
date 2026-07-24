// src/layout/Footer.jsx — CONTENT_STRATEGY.md §3.10 verbatim.
//
// The four link labels are a single inline list (not a multi-column grid),
// and the rest is plain mono meta text per DESIGN.md §9.
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper font-body">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col gap-4">
        <div className="font-display text-[18px] text-ink leading-none">
          Appriyo Technologies
        </div>

        <div className="font-mono text-[13px] text-ink-muted">
          Khulna, Bangladesh · Remote, worldwide
        </div>

        <a
          href="mailto:contact@appriyo.com"
          className="font-mono text-[13px] text-ink-soft hover:text-ink"
        >
          contact@appriyo.com
        </a>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-8 gap-y-2 pt-2"
        >
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-[15px] text-ink hover:text-ink-soft"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="font-mono text-[12px] text-ink-muted pt-4">
          © 2026 Appriyo Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
