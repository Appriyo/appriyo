// pages/AmarRepair.jsx
import ProductHero from "../sections/product-detail/ProductHero";
import ProductProblem from "../sections/product-detail/ProductProblem";
import ProductFeatures from "../sections/product-detail/ProductFeatures";
import { ProductAudience, ProductCTA } from "../sections/product-detail/ProductAudienceAndCTA";

export default function AmarRepair() {
  return (
    <>
      <ProductHero
        label="Amar Repair"
        headline="The Repair Shop System You've Been Running Manually"
        description="Job status on paper. Customer names on WhatsApp. Payments in a notebook. Amar Repair replaces all of that with one simple system."
      />
      <ProductProblem
        items={[
          "Customer calls asking for an update — you check three places to answer",
          "A job gets lost or forgotten between technicians",
          "No way to see all pending repairs at a glance",
        ]}
      />
      <ProductFeatures
        features={[
          { feature: "Job Intake", description: "Log every repair — device, issue, customer, technician" },
          { feature: "Status Tracking", description: "Received → In Progress → Ready → Delivered" },
          { feature: "Customer Notifications", description: "Automatic WhatsApp/SMS when a job is ready" },
          { feature: "Payment Management", description: "Record deposits, balances, mark jobs as paid" },
          { feature: "Customer History", description: "Full service history per customer and device" },
          { feature: "Dashboard", description: "See every open job at a glance" },
        ]}
      />
      <ProductAudience text="Amar Repair is built for mobile repair shops, computer repair centers, appliance repair businesses, and any service center managing physical jobs from intake to delivery." />
      <ProductCTA heading="Ready to Run Your Shop Without the Chaos?" ctaLabel="Talk to Us About Amar Repair" />
    </>
  );
}