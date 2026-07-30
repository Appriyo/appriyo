// src/sections/Hero.jsx — CONTENT_STRATEGY.md §3.2 + DESIGN.md §9.1
//
// Two-column hero. Left = headline + subtext + CTAs. Right = a
// ReceiptCard frame containing the Amar Repair dashboard screenshot.
// Real product, not a mockup of a fake one (per DESIGN.md §9).
import { hero, products } from "../data/homepage";
import Button from "../components/Button";
import ReceiptCard from "../components/ReceiptCard";
import LedgerLabel from "../components/LedgerLabel";

// The hero always shows the Amar Repair screenshot — see CONTENT_STRATEGY.md §3.2.
const heroScreenshot = products.items[0].screenshot;

export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left column — copy + CTAs (md: 7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <LedgerLabel>{hero.label}</LedgerLabel>

            <h1 className="font-display text-display-xl font-black text-ink leading-[1.05] tracking-[-0.01em]">
              {hero.headline}
            </h1>

            <p className="font-body text-lg text-ink-soft max-w-2xl leading-[1.55]">
              {hero.subtext}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Right column — ReceiptCard + real product screenshot (md: 5 cols) */}
          <div className="md:col-span-5">
            <ReceiptCard className="p-6 md:p-7">
              <img
                src={heroScreenshot}
                alt="Amar Repair dashboard"
                loading="eager"
                fetchpriority="high"
                className="block w-full h-auto rounded-card"
              />
            </ReceiptCard>
          </div>
        </div>
      </div>
    </section>
  );
}