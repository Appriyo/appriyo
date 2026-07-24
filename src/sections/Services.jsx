// src/sections/Services.jsx — CONTENT_STRATEGY.md §3.4
//
// 5 service cards in a LedgerCard. LedgerCard is the right primitive
// here — these are not evidence, just structured offerings, so the
// receipt-card perforation would be misused.
//
// The 5th card ("Products You Can Try Today") has an optional CTA and
// gets a text-variant Button inside the card body.
import { services } from "../data/homepage";
import SectionHeader from "../components/SectionHeader";
import LedgerCard from "../components/LedgerCard";
import Button from "../components/Button";

export default function Services() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <SectionHeader heading={services.heading} subtext={null} />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.items.map((item) => (
            <LedgerCard key={item.title} className="flex flex-col gap-3 h-full">
              <h3 className="font-display text-lg font-bold text-ink">
                {item.title}
              </h3>
              <p className="text-ink-soft text-[15px] leading-[1.55]">
                {item.body}
              </p>
              {item.cta ? (
                <div className="pt-2 mt-auto">
                  <Button href={item.cta.href} variant="text">
                    {item.cta.label}
                  </Button>
                </div>
              ) : null}
            </LedgerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
