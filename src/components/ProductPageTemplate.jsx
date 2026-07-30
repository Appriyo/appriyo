// src/components/ProductPageTemplate.jsx — CONTENT_STRATEGY.md §4
//
// Shared layout for every product detail page (Amar Repair, Amar Batch,
// any future product). Renders the §4 order exactly:
//
//   1. Ledger label  ("// Product")
//   2. H1            (product name)
//   3. Subtext       (one-sentence who-it's-for)
//   4. Stamp         (text driven by status field — see StampStatus)
//   5. Hero screenshot in a ReceiptCard frame
//   6. Section       "The problem it solves"
//   7. Section       "What it actually does" (3–5 capabilities)
//   8. Section       "Built with" (optional, small/muted)
//   9. Closing CTA   "Want something like this for your business? → Contact"
//
// The page itself ALSO needs a working link back to the homepage, per
// the user checklist. That lives on the closing CTA strip ("Back to
// home" link) so it isn't easy to forget.
import { Link } from "react-router-dom";
import LedgerLabel from "./LedgerLabel";
import LedgerCard from "./LedgerCard";
import ReceiptCard from "./ReceiptCard";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import StampStatus from "./StampStatus";

export default function ProductPageTemplate({ product }) {
  const {
    name,
    tagline,
    status,
    subtext,
    screenshot,
    problem,
    capabilities = [],
    techStack = [],
  } = product;

  return (
    <>
      {/* ── §4 block 1–4: label / headline / subtext / stamp ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-20 md:pb-16">
          <div className="flex flex-col gap-5">
            <LedgerLabel>// Product</LedgerLabel>

            <h1 className="font-display text-display-xl font-black text-ink leading-[1.05] tracking-[-0.01em]">
              {name}
            </h1>

            {tagline ? (
              <span className="font-mono text-sm text-ink-muted tracking-[0.04em]">
                {tagline}
              </span>
            ) : null}

            <p className="font-body text-lg text-ink-soft max-w-2xl leading-[1.55]">
              {subtext}
            </p>

            {/* Stamp text comes from `status`, never hardcoded in JSX. */}
            <div>
              <StampStatus status={status} />
            </div>
          </div>
        </div>
      </section>

      {/* ── §4 block 5: hero screenshot inside a ReceiptCard ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <ReceiptCard className="p-5 md:p-6">
            <img
              src={screenshot}
              alt={`Screenshot of the ${name} ${tagline.toLowerCase()} showing the live dashboard interface.`}
              loading="eager"
              fetchpriority="high"
              className="block w-full h-auto rounded-card"
            />
          </ReceiptCard>
        </div>
      </section>

      {/* ── §4 block 6: "The problem it solves" ── */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <SectionHeader
            label="// 01 — the problem"
            heading="The problem it solves"
          />
          <p className="text-ink-soft text-base leading-[1.65] mt-6">
            {problem}
          </p>
        </div>
      </section>

      {/* ── §4 block 7: "What it actually does" (3–5 capabilities) ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader
            label="// 02 — what it does"
            heading="What it actually does"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((c, i) => (
              <LedgerCard key={i} className="flex gap-4">
                <span className="font-mono text-sm text-stamp leading-none pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-ink-soft text-[15px] leading-[1.55]">
                  {c}
                </p>
              </LedgerCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── §4 block 8 (optional): "Built with" ── */}
      {techStack.length > 0 ? (
        <section className="bg-paper-dim">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <SectionHeader
              label="// 03 — built with"
              heading="Built with"
            />
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {techStack.map((t) => (
                <li
                  key={t}
                  className="font-mono text-xs text-ink-muted tracking-[0.04em]"
                >
                  · {t}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ── §4 block 9: closing CTA ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24 text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-display-lg font-black text-ink leading-[1.1] tracking-[-0.01em]">
            Want something like this for your business?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary">
              Contact us →
            </Button>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
          {/* The "Back to home" link is the explicit return-to-homepage
              path required by the Phase 4 checklist. */}
          <Link
            to="/"
            className="font-mono text-xs text-ink-muted tracking-[0.04em] hover:text-ink"
          >
            // back to homepage
          </Link>
        </div>
      </section>
    </>
  );
}
