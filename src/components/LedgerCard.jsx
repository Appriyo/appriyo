// src/components/LedgerCard.jsx — DESIGN.md §6.3
//
// Plain bordered card for services, process steps, and other non-evidence
// content. Hover lifts the card 2px and darkens the border from --color-line
// to --color-line-strong. No stamp, no perforation — see ReceiptCard for
// the evidence variant.
export default function LedgerCard({ children, className = "", as }) {
  const Element = as || "div";
  return (
    <Element
      className={
        "bg-paper-card border border-line rounded-card-lg p-6 " +
        "transition-[border-color,transform] duration-200 " +
        "hover:border-line-strong hover:-translate-y-0.5 " +
        className
      }
    >
      {children}
    </Element>
  );
}
