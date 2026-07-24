// src/components/ReceiptCard.jsx — DESIGN.md §6.2
//
// ────────────────────────────────────────────────────────────────────
// CONTENT RULE — RESERVED FOR REAL EVIDENCE
// ────────────────────────────────────────────────────────────────────
// This card's perforated top edge is the load-bearing "unmistakably
// Appriyo" visual signature. It is reserved for cards showing real
// evidence — product screenshots, verifiable client testimonials, real
// case-study metrics. Generic content (services list, process steps)
// should use LedgerCard instead so the receipt motif keeps its meaning.
// ────────────────────────────────────────────────────────────────────
//
// The perforation is drawn by the `.receipt-card` class in globals.css
// (a radial-gradient `::before` over the top border) — keep all styling
// there so every card across the site matches.
export default function ReceiptCard({ children, className = "", as: Tag = "div" }) {
  return <Tag className={`receipt-card ${className}`}>{children}</Tag>;
}
