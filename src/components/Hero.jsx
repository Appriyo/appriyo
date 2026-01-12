import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="bg-base-100 text-base-content min-h-[85vh] flex items-center"
      aria-label="Main introduction"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Trust indicator */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-base-200 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-base-content/80">
                A reliable software development team for business solutions
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
            <span className="block text-base-content">
              Custom Software That Solves
            </span>
            <span className="block">
              Real <span className="text-primary">Business Problems</span>
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="text-xl lg:text-2xl text-base-content/80 mb-8 lg:mb-12 max-w-3xl leading-relaxed">
            We build custom software solutions designed for long-term maintainability 
            and measurable business impact. Our focus is on reliable development 
            that drives efficiency and supports sustainable growth.
          </p>

          {/* Value proposition */}
          <div className="mb-10 lg:mb-14">
            <div className="flex flex-col sm:flex-row gap-6 text-base-content/70">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Tailored to your specific requirements</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Engineered for long-term maintainability</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Clear process with consistent updates</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="btn btn-primary btn-lg min-w-[220px] hover:bg-primary/90 transition-colors duration-200"
              aria-label="Schedule a consultation about custom software development"
            >
              Schedule Consultation
            </a>
            <a
              href="/services"
              className="btn btn-outline btn-lg min-w-[220px] border-base-content/30 hover:border-primary hover:bg-base-200"
              aria-label="View our custom software development services"
            >
              View Services
            </a>
          </div>

          {/* Secondary trust signal */}
          <div className="mt-12 pt-8 border-t border-base-300">
            <p className="text-base-content/60 text-sm">
              We partner with business leaders to develop custom software 
              that addresses operational challenges and delivers measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;