import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Solutions from "../components/Solutions";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Solutions />
      <Work />
      <About />
      <Contact />
    </div>
  );
}