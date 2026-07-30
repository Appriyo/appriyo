// src/sections/Process.jsx — CONTENT_STRATEGY.md §3.7
//
// 4 numbered process steps. Each step is a LedgerCard (not a
// ReceiptCard — process steps are not evidence).
//
// The step number is rendered in a stamp-soft tint to mark the
// "ledger" rhythm without crossing into the stamp evidence rule.
import { process } from "../data/homepage";
import SectionHeader from "../components/SectionHeader";
import LedgerCard from "../components/LedgerCard";
import Reveal from "../components/Reveal";

export default function Process() {
  return (
    <section className="bg-paper-dim" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionHeader heading={process.heading} subtext={null} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {process.steps.map((s, i) => (
            <Reveal key={s.n} stagger index={i}>
              <LedgerCard className="flex flex-col gap-3">
                <span className="font-mono text-2xl text-stamp leading-none">
                  {s.n}
                </span>
                <h3 className="font-display text-lg font-bold text-ink">
                  {s.title}
                </h3>
                <p className="text-ink-soft text-[15px] leading-[1.55]">
                  {s.body}
                </p>
              </LedgerCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}