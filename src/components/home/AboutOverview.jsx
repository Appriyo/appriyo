import React from 'react';

const AboutOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase">
            <div className="w-8 h-px bg-primary"></div>
            OUR APPROACH
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-6 md:mb-8">
            About Appriyo
          </h2>

          {/* Main Paragraph */}
          <div className="max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed md:leading-loose">
              Appriyo is a software development team that builds practical, maintainable solutions 
              focused on real business needs. We believe technology should solve problems, not create them— 
              which is why we prioritize clear communication, sustainable code, and measurable outcomes 
              in everything we build.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-3.5 font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-300 hover:shadow-md group"
            >
              <span>Learn More About Us</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            {/* Optional Subtext */}
            <p className="mt-4 text-sm text-base-content/50">
              Our values, team, and approach to technology partnerships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;