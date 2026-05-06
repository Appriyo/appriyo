// pages/AmarCard.jsx
import ProductHero from "../sections/product-detail/ProductHero";
import ProductProblem from "../sections/product-detail/ProductProblem";
import ProductFeatures from "../sections/product-detail/ProductFeatures";
import { ProductAudience, ProductCTA } from "../sections/product-detail/ProductAudienceAndCTA";

export default function AmarCard() {
  return (
    <>
      <ProductHero
        label="Amar Card"
        headline="Your Business Card Just Got a Tap"
        description="One tap on any modern phone shares your name, number, WhatsApp, links — everything. No app required on their end."
      />
      <ProductProblem
        items={[
          "Paper cards get lost or thrown away within days",
          "Every detail change means reprinting a new batch",
          "Can't link to your WhatsApp, website, or portfolio",
        ]}
      />
      <ProductFeatures
        features={[
          { feature: "NFC Tap", description: "One tap on any NFC-enabled phone opens your profile" },
          { feature: "No App Required", description: "Receiver doesn't need an app" },
          { feature: "Full Digital Profile", description: "Name, phone, WhatsApp, email, links, social" },
          { feature: "Instant Save", description: "Contact saves directly to their phone" },
          { feature: "Update Anytime", description: "Change details online — same physical card works" },
          { feature: "One Card, Forever", description: "No reprinting when your details change" },
        ]}
      />
      <ProductAudience text="For business owners, freelancers, consultants, sales professionals, and anyone who attends meetings or networking sessions." />
      <ProductCTA heading="Replace Your Paper Stack With One Smart Card" ctaLabel="Get Your Amar Card" />
    </>
  );
}