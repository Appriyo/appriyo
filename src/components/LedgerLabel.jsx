// src/components/LedgerLabel.jsx — DESIGN.md §4.3
//
// Small mono label, e.g. "// 02 — Services". No uppercase transform —
// a ledger label like "Service 03 of 05" reads more like a real record
// than "SERVICE" in caps. Color is ink-muted so it sits in front of
// the section heading without competing.
export default function LedgerLabel({ children, className = "" }) {
  return (
    <span
      className={`font-mono text-xs tracking-[0.04em] text-ink-muted ${className}`}
    >
      {children}
    </span>
  );
}
