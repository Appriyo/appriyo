// src/sections/Hero.jsx — CONTENT_STRATEGY.md §3.2 + DESIGN.md §9.1
//
// Two-column hero. Left = headline + subtext + CTAs. Right = a
// ReceiptCard frame containing the Amar Repair dashboard screenshot.
//
// Per DESIGN.md §8.3 the hero headline must NOT be wrapped in Reveal
// ("anything that delays reading the headline by more than ~300ms is
// forbidden"). The screenshot card is allowed to reveal because it is
// decorative copy that the visitor reads second.
//
// Localisation notes:
//   * The hero CTA labels come from home.hero.{primaryCta,secondaryCta}.label.
//   * The CTA URLs are language-independent and live in src/data/homeCtas.js
//     so they don't have to be maintained in two locales.
import { getProductBySlug, HERO_PRODUCT_SLUG } from "../data/products";
import { HOME_HERO_CTA } from "../data/homeCtas";
import Button from "../components/Button";
import ReceiptCard from "../components/ReceiptCard";
import LedgerLabel from "../components/LedgerLabel";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/hooks";

const heroProduct = getProductBySlug(HERO_PRODUCT_SLUG);
const heroScreenshot = heroProduct?.screenshot;

export default function Hero() {
  const { t } = useLanguage("home");
  return (
    <section className="bg-paper" aria-labelledby="hero-headline">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left column — copy + CTAs (md: 7 cols). Headline is NOT
              wrapped in Reveal so the first paint shows it immediately
              (DESIGN.md §8.3). */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <LedgerLabel>{t("home.hero.label")}</LedgerLabel>

            <h1
              id="hero-headline"
              className="font-display text-display-xl font-black text-ink leading-[1.05] tracking-[-0.01em]"
            >
              {t("home.hero.headline")}
            </h1>

            <p className="font-body text-lg text-ink-soft max-w-2xl leading-[1.55]">
              {t("home.hero.subtext")}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={HOME_HERO_CTA.primaryHref} variant="primary">
                {t("home.hero.primaryCta.label")}
              </Button>
              <Button href={HOME_HERO_CTA.secondaryHref} variant="secondary">
                {t("home.hero.secondaryCta.label")}
              </Button>
            </div>
          </div>

          {/* Right column — ReceiptCard + real product screenshot.
              Reveal allowed here (decorative; visitor reads headline first). */}
          <div className="md:col-span-5">
            <Reveal>
              <ReceiptCard className="p-6 md:p-7">
                <img
                  src={heroScreenshot}
                  alt={t("home.hero.screenshotAlt")}
                  loading="eager"
                  fetchpriority="high"
                  className="block w-full h-auto rounded-card"
                />
              </ReceiptCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}