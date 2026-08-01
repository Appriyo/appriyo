// src/sections/Products.jsx — CONTENT_STRATEGY.md §3.5
//
// ReceiptCard per product. StampStatus renders the status badge
// ("Live product" / "In development") from the product's `status`
// field — see components/StampStatus.jsx for the mapping and the
// design rule that every Stamp must be next to something genuinely
// verifiable.
import SectionHeader from "../components/SectionHeader";
import ReceiptCard from "../components/ReceiptCard";
import Button from "../components/Button";
import StampStatus from "../components/StampStatus";
import Reveal from "../components/Reveal";
import { products as productImages } from "../data/products";
import { useLanguage } from "../i18n/hooks";

export default function Products() {
  const { t } = useLanguage("home");
  const items = t("home.products.items", { returnObjects: true });
  // The image paths and status values stay in src/data/products.js because
  // they're not user-facing strings — image paths are URLs and statuses
  // are i18n keys mapped to display text inside StampStatus.
  const meta = productImages;

  return (
    <section className="bg-paper-dim" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionHeader heading={t("home.products.heading")} subtext={null} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((p, i) => {
            const imageMeta = meta[i];
            // Use the first item's screenshotAlt template — both products
            // share the same alt-text shape ("Screenshot of the X Y
            // interface.") so we reuse the same i18n key and interpolate
            // the product's own name and tagline at render time.
            const altText = t("home.products.items.0.screenshotAlt", {
              name: p.name,
              tagline: p.tagline.toLowerCase(),
            });
            return (
              <Reveal key={p.name} stagger index={i}>
                <ReceiptCard className="flex flex-col gap-5">
                  <img
                    src={imageMeta.screenshot}
                    alt={altText}
                    loading="lazy"
                    className="block w-full h-auto aspect-[16/9] object-cover rounded-card border border-line"
                  />

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-xl font-bold text-ink">
                        {p.name}
                      </h3>
                      <StampStatus status={imageMeta.status} />
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
