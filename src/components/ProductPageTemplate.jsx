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
import { useLanguage } from "../i18n/hooks";

export default function ProductPageTemplate({ product }) {
  const { t } = useLanguage("productDetail");
  // product.shape comes from src/data/products.js (slug, name, tagline,
  // status, screenshot). The other fields — subtext, problem,
  // capabilities, techStack — come from the productDetail namespace.
  const { slug, name, tagline, status, screenshot } = product;
  const productCopy = t(`productDetail.products.${slug === "amar-repair" ? "amarRepair" : "amarBatch"}`, { returnObjects: true }) || {};
  const capabilities = productCopy.capabilities ?? [];
  const techStack = productCopy.techStack ?? [];

  const altText = t("productDetail.template.screenshotAlt", {
    name,
    tagline: tagline.toLowerCase(),
  });

  return (
    <>
      {/* ── §4 block 1–4: label / headline / subtext / stamp ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-20 md:pb-16">
          <div className="flex flex-col gap-5">
            <LedgerLabel>{t("productDetail.template.productLabel")}</LedgerLabel>

            <h1 className="font-display text-display-xl font-black text-ink leading-[1.05] tracking-[-0.01em]">
              {name}
            </h1>

            {tagline ? (
              <span className="font-mono text-sm text-ink-muted tracking-[0.04em]">
                {tagline}
              </span>
            ) : null}

            <p className="font-body text-lg text-ink-soft max-w-2xl leading-[1.55]">
              {productCopy.subtext}
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
              alt={altText}
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
            label={t("productDetail.template.problemLabel")}
            heading={t("productDetail.template.problemHeading")}
          />
          <p className="text-ink-soft text-base leading-[1.65] mt-6">
            {productCopy.problem}
          </p>
        </div>
      </section>

      {/* ── §4 block 7: "What it actually does" (3–5 capabilities) ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader
            label={t("productDetail.template.capabilitiesLabel")}
            heading={t("productDetail.template.capabilitiesHeading")}
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
              label={t("productDetail.template.techLabel")}
              heading={t("productDetail.template.techHeading")}
            />
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-xs text-ink-muted tracking-[0.04em]"
                >
                  {tech}
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
            {t("productDetail.template.closingHeading")}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary">
              {t("productDetail.template.contactCta")}
            </Button>
            <Button href="/" variant="secondary">
              {t("productDetail.template.backToHomeCta")}
            </Button>
          </div>
          {/* The "Back to home" link is the explicit return-to-homepage
              path required by the Phase 4 checklist. */}
          <Link
            to="/"
            className="font-mono text-xs text-ink-muted tracking-[0.04em] hover:text-ink"
          >
            {t("common.backToHomepageLabel")}
          </Link>
        </div>
      </section>
    </>
  );
}
