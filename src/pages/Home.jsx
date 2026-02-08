import Hero from "../components/Hero";
import AboutOverview from "../components/home/AboutOverview";
import HomeCTA from "../components/home/HomeCTA";
import ServicesOverview from "../components/home/ServicesOverview";
import SolutionsOverview from "../components/home/SolutionsOverview";
import WhyAppriyo from "../components/home/WhyAppriyo";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SolutionsOverview />
      <WhyAppriyo />
      <AboutOverview />
      <HomeCTA />
    </>
  );
};

export default Home;
