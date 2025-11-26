import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20"> {/* Added padding to account for fixed navbar */}
      <Hero />
      {/* Add your other sections below */}
      <section id="services" className="min-h-screen bg-gray-900"></section>
      <section id="work" className="min-h-screen bg-gray-950"></section>
      <section id="about" className="min-h-screen bg-gray-900"></section>
      <section id="contact" className="min-h-screen bg-gray-950"></section>
    </div>
  );
}