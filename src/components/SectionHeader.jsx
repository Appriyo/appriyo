// src/components/SectionHeader.jsx — DESIGN.md §5.2
//
// The pattern every section opens with:
//   [thin rule, full width, --color-line]
//   [LedgerLabel]   mono, e.g. "// 02 — Services"
//   [Heading]       Bitter, sentence case, weight 900, --color-ink
//   [Subtext]       Inter, --color-ink-soft, max 2 lines
//
// Sections compose this rather than hand-rolling their own header markup
// so the rhythm across the page stays consistent.
import LedgerLabel from "./LedgerLabel";

export default function SectionHeader({ label, heading, subtext, className = "" }) {
  return (
    <header className={`border-t border-line pt-8 ${className}`}>
      {label ? (
        <LedgerLabel className="block">{label}</LedgerLabel>
      ) : null}
      {heading ? (
        <h2 className="font-display text-display-lg font-black text-ink mt-2 tracking-[-0.01em] leading-[1.1]">
          {heading}
        </h2>
      ) : null}
      {subtext ? (
        <p className="font-body text-base text-ink-soft mt-3 max-w-3xl">
          {subtext}
        </p>
      ) : null}
    </header>
  );
}
