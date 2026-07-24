// src/sections/Problem.jsx — CONTENT_STRATEGY.md §3.3
//
// Full-width "paper-dim" panel extending edge to edge. No rule, no
// label, no subtext — SectionHeader would add visual noise here. The
// single question is the whole point of the section.
import { problem } from "../data/homepage";

export default function Problem() {
  return (
    <section className="bg-paper-dim">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
        <h2 className="font-display text-display-lg font-black text-ink leading-[1.1] tracking-[-0.01em]">
          {problem.heading}
        </h2>
      </div>
    </section>
  );
}
