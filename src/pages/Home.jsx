import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20"> {/* Added padding to account for fixed navbar */}
      <Hero />
      <Services />
      {/* <Work /> */}
      <About />
      <Contact />
    </div>
  );
}