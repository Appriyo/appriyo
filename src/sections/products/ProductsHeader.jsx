// sections/products/ProductsHeader.jsx
// TODO: Full implementation — see pages.md §4.1

export default function ProductsHeader() {
  return (
    <header className="section-spacing" style={{ paddingTop: "calc(64px + clamp(48px, 6vw, 80px))", textAlign: "center" }}>
      <div className="site-container">
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Our Products</p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "16px" }}>Real Software. Built from Real Problems.</h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
          Every Appriyo product started with a business owner who had a problem and no good solution.
        </p>
      </div>
    </header>
  );
}