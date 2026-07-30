// src/sections/Products.jsx — CONTENT_STRATEGY.md §3.5
//
// ReceiptCard per product. StampStatus renders the status badge
// ("Live product" / "In development") from the product's `status`
// field in src/data/homepage.js — see components/StampStatus.jsx for
// the mapping and the design rule that every Stamp must be next to
// something genuinely verifiable.
import { products } from "../data/homepage";
import SectionHeader from "../components/SectionHeader";
import ReceiptCard from "../components/ReceiptCard";
import Button from "../components/Button";
import StampStatus from "../components/StampStatus";

export default function Products() {
  return (
    <section className="bg-paper-dim">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <SectionHeader heading={products.heading} subtext={null} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.items.map((p) => (
            <ReceiptCard key={p.name} className="flex flex-col gap-5">
              <img
                src={p.screenshot}
                alt={`${p.name} dashboard screenshot`}
                loading="lazy"
                className="block w-full h-auto aspect-[16/9] object-cover rounded-card border border-line"
              />

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {p.name}
                  </h3>
                  <StampStatus status={p.status} />
                </div>
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