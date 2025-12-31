import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // requestAnimationFrame ensures the browser has painted the 
    // initial state (opacity-0) before we switch to opacity-100
    const raf = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-base-100 text-base-content"
      role="banner"
      aria-label="Hero section"
    >
      {/* Simplified background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/3 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:max-w-4xl">
            {/* Updated trust badge - more realistic for early-stage company */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 lg:mb-8 bg-base-200/50 backdrop-blur-sm rounded-full border border-base-300 transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-base-content/70">
                Professional IT solutions, delivered with care
              </span>
            </div>

            {/* Refined headline - more concrete and outcome-focused */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="block text-base-content">
                We build practical software
              </span>
              <span className="block">
                that improves{' '}
                <span className="text-primary font-semibold">
                  business efficiency
                </span>
              </span>
            </h1>

            {/* Tightened subheading - focused on practical solutions */}
            <p 
              className={`text-lg sm:text-xl text-base-content/80 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-opacity duration-700 delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              We help businesses streamline operations through custom software 
              and intelligent automation. Our solutions are designed to save time, 
              reduce errors, and drive measurable results.
            </p>

            {/* CTA Buttons - simplified animations */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12 transition-opacity duration-700 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="btn btn-primary btn-lg min-w-[200px] sm:min-w-[180px] hover:scale-[1.02] transition-transform duration-200"
                aria-label="Schedule a free consultation"
              >
                Get a Free Consultation
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="btn btn-outline btn-lg min-w-[200px] sm:min-w-[180px] border-base-content/30 hover:border-primary hover:bg-base-200"
                aria-label="Browse our services"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Simplified visual separator */}
        <div 
          className={`hidden lg:block absolute left-0 right-0 bottom-0 h-px bg-linear-to-r from-transparent via-base-300 to-transparent transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;