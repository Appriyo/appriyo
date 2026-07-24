// src/sections/WhyAppriyo.jsx — CONTENT_STRATEGY.md §3.6
//
// The "stats" array is intentionally empty at launch (see
// docs/Asset_Checklist.md — only real numbers, no invented figures).
// The stats panel therefore renders a labelled placeholder ruled by
// the LedgerLabel primitive, not a number.
//
// Team photos use the real files under /public/img/team_img/, with
// the original "profile pic.jpg" filename URL-encoded because it
// contains a space.
import { whyAppriyo } from "../data/homepage";
import SectionHeader from "../components/SectionHeader";
import LedgerLabel from "../components/LedgerLabel";

export default function WhyAppriyo() {
  const stats = whyAppriyo.stats ?? [];

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <SectionHeader heading={whyAppriyo.heading} subtext={null} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left column — paragraph + stats panel (md: 7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <p className="text-ink-soft text-base leading-[1.6] max-w-2xl">
              {whyAppriyo.paragraph}
            </p>

            {/* Stats placeholder. The stats array is empty at launch
                per Content_Strategy.md §3.6 — only real numbers will
                be shown once Asset_Checklist is satisfied. Do NOT
                invent metrics to fill this row. */}
            <div className="border border-line rounded-card-lg bg-paper-card p-6">
              <LedgerLabel>// stats coming — Asset_Checklist</LedgerLabel>
              <p className="font-mono text-xs text-ink-muted mt-3 leading-[1.6]">
                {stats.length === 0
                  ? "No stats will be shown here until real numbers are confirmed."
                  : `${stats.length} stat${stats.length === 1 ? "" : "s"} pending display.`}
              </p>
            </div>
          </div>

          {/* Right column — team grid (md: 5 cols) */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-5">
              {whyAppriyo.team.map((m) => (
                <figure key={m.name} className="flex flex-col gap-3">
                  <div className="aspect-square w-full overflow-hidden rounded-card-lg border border-line bg-paper-dim">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1">
                    <span className="font-display text-[15px] text-ink leading-tight">
                      {m.name}
                    </span>
                    <span className="font-mono text-[11px] text-ink-muted tracking-[0.04em] leading-snug">
                      {m.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
