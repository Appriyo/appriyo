// pages/AmarCard.jsx
import ProductHero from "../sections/products/ProductHero";
import ProductProblem from "../sections/product-detail/ProductProblem";
import ProductFeatures from "../sections/product-detail/ProductFeatures";
import { ProductAudience, ProductCTA } from "../sections/product-detail/ProductAudience";
import { useLanguage } from "../i18n/hooks";
import usePageMeta from "../hooks/usePageMeta";

export default function AmarCard() {
  const { t } = useLanguage("productDetail");
  usePageMeta({
    titleKey: "metadata.amarCard.title",
    descriptionKey: "metadata.amarCard.description",
  });
  const card = t("productDetail.items.amarCard", { returnObjects: true });

  return (
    <>
      <ProductHero
        label={card.label}
        headline={card.headline}
        description={card.description}
      />
      <ProductProblem items={card.problem} />
      <ProductFeatures features={card.features} />
      <ProductAudience text={card.audience} />
      <ProductCTA heading={card.ctaHeading} ctaLabel={card.ctaButton} />
    </>
  );
}
