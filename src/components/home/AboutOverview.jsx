import React from 'react';

const AboutOverview = () => {
  const sectionId = 'about-overview';

  return (
    <section 
      id={sectionId} 
      className="py-16 md:py-24 bg-base-100"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase" aria-hidden="true">
            <div className="w-8 h-px bg-primary"></div>
            ABOUT APPRIYO
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          {/* Main Heading with SEO emphasis */}
          <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-6 md:mb-8">
            A Custom Software Development Company Focused on Long-Term Value
          </h2>

          {/* Primary Content - SEO optimized with key phrases */}
          <div className="max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed md:leading-loose mb-6">
              Appriyo is a professional software development company that builds custom software solutions 
              for businesses seeking reliable technology partners. We focus on sustainable development, 
              maintainable code, and solutions that deliver measurable business outcomes.
            </p>
            
            {/* Supporting differentiation statement */}
            <div className="pt-6 border-t border-base-300">
              <p className="text-base-content/70 text-md">
                We prioritize clarity, responsibility, and long-term partnership over short-term deliverables.
              </p>
            </div>
          </div>

          {/* CTA with clear intent */}
          <div>
            <a
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-3.5 font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-300 hover:shadow-md group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Learn more about Appriyo's approach to software development and technology partnerships"
            >
              <span>Explore Our Company & Values</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            {/* Context for CTA */}
            <p className="mt-4 text-sm text-base-content/50">
              Our approach to technology partnerships, team expertise, and development methodology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;