// pages/Home.jsx
import HeroSection      from "../sections/home/HeroSection";
import ServicesOverview from "../sections/home/ServicesOverview";
import SolutionsOverview from "../sections/home/SolutionsOverview";
import ProductsOverview from "../sections/home/ProductsOverview";
import WhyAppriyo       from "../sections/home/WhyAppriyo";
import ApproachSection  from "../sections/home/ApproachSection";
import AboutPreview     from "../sections/home/AboutPreview";
import ContactSection   from "../sections/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <SolutionsOverview />
      <ProductsOverview />
      <WhyAppriyo />
      <ApproachSection />
      <AboutPreview />
      <ContactSection />
    </>
  );
}