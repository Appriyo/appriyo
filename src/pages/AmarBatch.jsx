// pages/AmarBatch.jsx
import ProductHero from "../sections/product-detail/ProductHero";
import ProductProblem from "../sections/product-detail/ProductProblem";
import ProductFeatures from "../sections/product-detail/ProductFeatures";
import { ProductAudience, ProductCTA } from "../sections/product-detail/ProductAudienceAndCTA";

export default function AmarBatch() {
  return (
    <>
      <ProductHero
        label="Amar Batch"
        headline="Batch Management for Educators Who Are Done With Notebooks"
        description="Students, batches, attendance, fees, reminders — all in one place."
      />
      <ProductProblem
        items={[
          "Student lists in notebooks or separate Excel files",
          "Fee collection tracked manually — someone always 'forgot to pay'",
          "Hours spent each month figuring out who owes what",
        ]}
      />
      <ProductFeatures
        features={[
          { feature: "Student Management", description: "Enroll students, track details, manage status" },
          { feature: "Batch Organization", description: "Group by subject, time, or level" },
          { feature: "Attendance Tracking", description: "Mark daily attendance, view trends" },
          { feature: "Fee Management", description: "Set fees, record payments, see dues" },
          { feature: "Automated Reminders", description: "Send fee reminders without doing it manually" },
          { feature: "Reports", description: "Monthly summaries of attendance and fees" },
        ]}
      />
      <ProductAudience text="For private tutors, coaching centers with 10–200+ students, and educational institutes still managing on paper or Excel." />
      <ProductCTA heading="Ready to Stop Managing on Paper?" ctaLabel="Talk to Us About Amar Batch" />
    </>
  );
}