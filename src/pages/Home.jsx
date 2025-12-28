import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}