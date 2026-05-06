// sections/solutions/SolutionsHeader.jsx
// TODO: Full implementation — see pages.md §3.1

export default function SolutionsHeader() {
  return (
    <header className="section-spacing" style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))", textAlign: "center" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Solutions</p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "16px" }}>Find Your Problem Here</h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
          We built Appriyo's products by listening to business owners talk about what frustrated them every day.
        </p>
      </div>
    </header>
  );
}