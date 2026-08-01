// src/sections/Services.jsx — CONTENT_STRATEGY.md §3.4
//
// 5 service cards in a LedgerCard. LedgerCard is the right primitive
// here — these are not evidence, just structured offerings, so the
// receipt-card perforation would be misused.
//
// The 5th card ("Products You Can Try Today") has an optional CTA and
// gets a text-variant Button inside the card body.
//
// Stagger: the design system caps staggered reveals at 4 items per
// grid (§8.2). With 5 service items, items 0–3 stagger by 50ms each,
// and item 4 reveals simultaneously with item 3 (the cap). The Reveal
// component enforces the cap internally.
import SectionHeader from "../components/SectionHeader";
import LedgerCard from "../components/LedgerCard";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/hooks";

export default function Services() {
  const { t } = useLanguage("home");
  // Read the items array as a whole so the order, body text, and
  // optional CTA hrefs come from the translation file. The CTA label
  // and href for the 5th item live under items[4].cta inside the JSON.
  const items = t("home.services.items", { returnObjects: true });

  return (
    <section className="bg-paper" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionHeader heading={t("home.services.heading")} subtext={null} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} stagger index={i}>
              <LedgerCard className="flex flex-col gap-3 h-full">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
