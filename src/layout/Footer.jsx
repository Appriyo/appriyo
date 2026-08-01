// src/layout/Footer.jsx — CONTENT_STRATEGY.md §3.10 verbatim.
//
// The four link labels are a single inline list (not a multi-column grid),
// and the rest is plain mono meta text per DESIGN.md §9.
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/hooks";

const footerLinks = [
  { labelKey: "layout.footer.links.services", href: "/services" },
  { labelKey: "layout.footer.links.products", href: "/products" },
  { labelKey: "layout.footer.links.about",    href: "/about"    },
  { labelKey: "layout.footer.links.contact",  href: "/contact"  },
];

export default function Footer() {
  const { t } = useLanguage("layout");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper font-body">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col gap-4">
        <div className="font-display text-[18px] text-ink leading-none">
          {t("layout.footer.brand")}
        </div>

        <div className="font-mono text-[13px] text-ink-muted">
          {t("layout.footer.location")}
        </div>

        <a
          href={`mailto:${t("layout.footer.email")}`}
          className="font-mono text-[13px] text-ink-soft hover:text-ink"
        >
          {t("layout.footer.email")}
        </a>

        <nav
          aria-label={t("common.aria.footer")}
          className="flex flex-wrap gap-x-8 gap-y-2 pt-2"
        >
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-[15px] text-ink hover:text-ink-soft"
            >
              {t(l.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="font-mono text-[12px] text-ink-muted pt-4">
          {t("layout.footer.copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
