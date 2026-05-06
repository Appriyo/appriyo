// pages/Products.jsx
import ProductsHeader      from "../sections/products/ProductsHeader";
import ProductOverviewCard from "../sections/products/ProductOverviewCard";
import { productsData }    from "../data/productsData";

export default function Products() {
  return (
    <>
      <ProductsHeader />
      {productsData.map(p => <ProductOverviewCard key={p.id} {...p} />)}
      {/* Custom product CTA */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "clamp(64px, 8vw, 96px)", textAlign: "center" }}>
        <div className="site-container">
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "12px" }}>Have a Problem That Needs Its Own Product?</h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>Tell us what you need — we build custom.</p>
          <a href="/contact" style={{ display: "inline-flex", padding: "12px 24px", background: "var(--color-primary)", color: "#fff", borderRadius: "8px", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}>
            Let's Build It
          </a>
        </div>
      </div>
    </>
  );
}