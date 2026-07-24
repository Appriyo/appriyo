// src/sections/Products.jsx — CONTENT_STRATEGY.md §3.5
//
// IMPORTANT: This section MUST NOT use the Stamp component. The
// products are real software, but their "live product" status is not
// confirmed and Asset_Checklist.md requires explicit confirmation
// before stamping. Phase 5 will revisit.
//
// The card frame is a ReceiptCard because it is the evidence motif
// — the inner rectangle is where the real screenshot will mount in
// Phase 5. For now the rectangle is a labelled placeholder.
import { products } from "../data/homepage";
import SectionHeader from "../components/SectionHeader";
import ReceiptCard from "../components/ReceiptCard";
import Button from "../components/Button";

export default function Products() {
  return (
    <section className="bg-paper-dim">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <SectionHeader heading={products.heading} subtext={null} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.items.map((p) => (
            <ReceiptCard key={p.name} className="flex flex-col gap-5">
              {/* PLACEHOLDER — replace before launch.
                  Real product screenshots will replace this rectangle
                  in Phase 5 once provided. The on-page label is
                  intentional so reviewers can see the evidence area
                  is still empty. */}
              <div
                className="bg-paper-dim border border-line rounded-card flex flex-col items-center justify-center text-center aspect-[16/9] w-full"
                role="img"
                aria-label={`[PLACEHOLDER — replace before launch] ${p.name} screenshot`}
              >
                <span className="font-mono text-xs text-ink-muted tracking-[0.04em]">
                  [PLACEHOLDER — replace before launch]
                </span>
                <span className="font-mono text-xs text-ink-muted tracking-[0.04em] mt-1">
                  {p.name} screenshot
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold text-ink">
                  {p.name}
                </h3>
                <span className="font-mono text-xs text-ink-muted tracking-[0.04em]">
                  {p.tagline}
                </span>
              </div>

              <p className="text-ink-soft text-[15px] leading-[1.55]">
                {p.body}
              </p>

              <div className="pt-1">
                <Button href={p.cta.href} variant="primary">
                  {p.cta.label}
                </Button>
              </div>
            </ReceiptCard>
          ))}
        </div>
      </div>
    </section>
  );
}
