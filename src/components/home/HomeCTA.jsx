import React from 'react';

const HomeCTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = (e) => {
    e.preventDefault();
    scrollToContact();
  };

  return (
    <section className="py-16 md:py-24 bg-base-100" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          {/* Container with subtle professional contrast */}
          <div className="bg-base-200/50 border border-base-300 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            
            {/* Headline - Focus on partnership and solutions */}
            <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
              Let's Build Your Solution Together
            </h2>

            {/* Supporting Text - Clear value proposition */}
            <div className="max-w-xl mx-auto mb-8 md:mb-10">
              <p className="text-lg md:text-xl text-base-content/70 mb-4">
                Discuss your business challenges with our software development team
              </p>
              <p className="text-base-content/60 text-md">
                We'll provide honest feedback, a clear technical approach, and a roadmap for your custom software solution.
              </p>
            </div>

            {/* Primary CTA Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button
                onClick={handleCTAClick}
                className="btn btn-primary btn-lg px-8 py-4 font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Schedule a consultation with Appriyo's software development team"
              >
                Start a Conversation
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              
              {/* Secondary CTA - For decision makers */}
              <a
                href="/work"
                className="btn btn-outline border-base-300 text-base-content hover:bg-base-200 hover:border-base-400 px-8 py-4 font-medium text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-base-300 focus:ring-offset-2"
                aria-label="View Appriyo's portfolio of custom software development projects"
              >
                See Example Projects
              </a>
            </div>

            {/* Trust Indicators - Minimal and professional */}
            <div className="mt-8 pt-8 border-t border-base-300">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-base-content/60">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No-pressure consultation</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-base-content/20" aria-hidden="true"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Clear technical proposal</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-base-content/20" aria-hidden="true"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Business-focused approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company credibility note */}
          <div className="mt-8">
            <p className="text-sm text-base-content/50">
              Appriyo — Your partner for custom software development and business solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;