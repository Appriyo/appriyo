import React from 'react';
import { HERO_CONTENT } from '../data/heroContent';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-base-100 text-base-content min-h-[90vh] lg:min-h-screen flex items-center"
      aria-label="Main introduction"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Core Content */}
          <div className="lg:col-span-7">
            {/* 1. Trust Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-base-content/10 bg-base-200/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                  {HERO_CONTENT.trustBadge}
                </span>
              </div>
            </div>

            {/* 2. Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
              <span className="block opacity-90">{HERO_CONTENT.headline.top}</span>
              <span className="text-primary">{HERO_CONTENT.headline.accent}</span>
            </h1>

            {/* 3. Description */}
            <p className="text-lg lg:text-xl text-base-content/70 mb-8 max-w-2xl leading-relaxed">
              {HERO_CONTENT.description}
            </p>

            {/* 4. CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <a
                href={HERO_CONTENT.ctas.primary.href}
                className="btn btn-primary btn-lg w-full sm:w-auto px-10 shadow-xl shadow-primary/20"
                aria-label={HERO_CONTENT.ctas.primary.aria}
              >
                {HERO_CONTENT.ctas.primary.text}
              </a>
              <a
                href={HERO_CONTENT.ctas.secondary.href}
                className="btn btn-outline btn-lg w-full sm:w-auto px-10"
                aria-label={HERO_CONTENT.ctas.secondary.aria}
              >
                {HERO_CONTENT.ctas.secondary.text}
              </a>
            </div>
          </div>

          {/* Right Column: Benefits Card */}
          <div className="lg:col-span-5">
            <div className="bg-base-200/50 backdrop-blur-md border border-base-content/5 p-6 lg:p-8 rounded-3xl shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-6 text-center lg:text-left">
                Engineering Excellence
              </h3>
              <div className="space-y-4">
                {HERO_CONTENT.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold opacity-80">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs italic opacity-50 border-t border-base-content/10 pt-6">
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