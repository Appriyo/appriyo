// src/components/Stamp.jsx — DESIGN.md §6.1
//
// ────────────────────────────────────────────────────────────────────
// CONTENT RULE — READ BEFORE EDITING OR PLACING THIS COMPONENT
// ────────────────────────────────────────────────────────────────────
// The stamp badge is reserved for content that is CURRENTLY, VERIFIABLY
// TRUE — a real client result, a real product metric, a completed
// project, a delivery date. NEVER decorative, NEVER on marketing copy.
//
// Per DESIGN.md §2.5 ("Evidence Over Adjectives") and §6.1 ("Hard rule"):
//   "if stamp red appears on something that isn't a verifiable claim
//    (a client name, a real number, a named result), it's being misused
//    — remove it."
//
// If you are unsure whether the content next to the stamp is verifiable,
// don't render this component. This is a content rule, not just a style
// rule — see docs/COMPONENT_INVENTORY.md "Stamp" notes.
// ────────────────────────────────────────────────────────────────────
export default function Stamp({ children, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center gap-[6px] " +
        "border-[1.5px] border-stamp text-stamp " +
        "rounded-full px-3 py-1 " +
        "font-mono text-xs font-medium " +
        "bg-stamp-soft " +
        "rotate-[-2deg] " +
        "shadow-stamp " +
        className
      }
    >
      {children}
    </span>
  );
}
