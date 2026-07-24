// src/pages/Home.jsx — HOME ASSEMBLY
//
// Section order follows docs/Content_Strategy.md §3:
//   Hero → Problem → Services → Products → WhyAppriyo → Process → Contact
//
// No Testimonials section until Phase 5 confirms real quotes.
// All copy lives in src/data/homepage.js. Layout/Nav/Footer wrap from
// src/router/AppRouter.jsx.
import Hero        from "../sections/Hero";
import Problem     from "../sections/Problem";
import Services    from "../sections/Services";
import Products    from "../sections/Products";
import WhyAppriyo  from "../sections/WhyAppriyo";
import Process     from "../sections/Process";
import Contact     from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Products />
      <WhyAppriyo />
      <Process />
      <Contact />
    </>
  );
}
