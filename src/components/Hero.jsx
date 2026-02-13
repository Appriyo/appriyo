import React from "react";
import { HERO_CONTENT } from "../data/heroContent";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 min-h-screen flex items-center bg-base-100 text-base-content overflow-hidden"
      aria-label="Main introduction"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Trust Badge */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-base-content/10 bg-base-200/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
                  {HERO_CONTENT.trustBadge}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="block opacity-90">
                {HERO_CONTENT.headline.top}
              </span>
              <span className="block text-primary">
                {HERO_CONTENT.headline.accent}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl text-base-content/70 leading-relaxed mb-10">
              {HERO_CONTENT.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={HERO_CONTENT.ctas.primary.href}
                className="btn btn-primary btn-lg px-8 sm:px-10 shadow-lg shadow-primary/20"
                aria-label={HERO_CONTENT.ctas.primary.aria}
              >
                {HERO_CONTENT.ctas.primary.text}
              </a>

              <a
                href={HERO_CONTENT.ctas.secondary.href}
                className="btn btn-outline btn-lg px-8 sm:px-10"
                aria-label={HERO_CONTENT.ctas.secondary.aria}
              >
                {HERO_CONTENT.ctas.secondary.text}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-base-200/60 backdrop-blur-md border border-base-content/10 p-6 sm:p-8 shadow-xl">

              <h3 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-6">
                Why Appriyo
              </h3>

              <div className="space-y-4">
                {HERO_CONTENT.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="font-medium opacity-80 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 pt-6 border-t border-base-content/10 text-xs italic opacity-50">
                {HERO_CONTENT.footerText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
