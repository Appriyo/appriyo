// src/sections/Hero.jsx — CONTENT_STRATEGY.md §3.2 + DESIGN.md §9.1
//
// Two-column hero. Left = headline + subtext + CTAs. Right = a
// ReceiptCard frame containing a grey placeholder rectangle for the
// product screenshot that doesn't exist yet.
//
// ReceiptCard is used here on purpose: it is the evidence motif, and
// when the real screenshot lands in Phase 5 the surrounding frame is
// already correct — only the inner placeholder needs to be swapped out.
//
// PLACEHOLDER — replace before launch: the screenshot rectangle is a
// labelled stand-in. Do not ship until /img/amar-repair-dashboard.png
// (or equivalent) is in place per docs/Asset_Checklist.md.
import { hero } from "../data/homepage";
import Button from "../components/Button";
import ReceiptCard from "../components/ReceiptCard";
import LedgerLabel from "../components/LedgerLabel";

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

          {/* Right column — ReceiptCard + placeholder screenshot (md: 5 cols) */}
          <div className="md:col-span-5">
            <ReceiptCard className="p-6 md:p-7">
              {/* PLACEHOLDER — replace before launch.
                  Real screenshot will replace this rectangle once
                  /img/amar-repair-dashboard.png (or equivalent) is
                  provided. Do NOT remove the visible label — it's
                  there so reviewers can see at a glance that the
                  evidence area is still empty. */}
              <div
                className="bg-paper-dim border border-line rounded-card flex flex-col items-center justify-center text-center aspect-[4/3] w-full"
                role="img"
                aria-label="[PLACEHOLDER — replace before launch] Product screenshot"
              >
                <span className="font-mono text-xs text-ink-muted tracking-[0.04em]">
                  [PLACEHOLDER — replace before launch]
                </span>
                <span className="font-mono text-xs text-ink-muted tracking-[0.04em] mt-1">
                  product screenshot
                </span>
              </div>
            </ReceiptCard>
          </div>
        </div>
      </div>
    </section>
  );
}
