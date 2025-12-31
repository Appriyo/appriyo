import React from 'react';

const HomeCTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          {/* Section Container with Subtle Background */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
              Have a project in mind?
            </h2>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-base-content/70 mb-8 md:mb-10 max-w-xl mx-auto">
              Let's discuss how we can turn your business challenges into practical, effective software solutions.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-lg px-8 py-4 font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Talk With Our Team
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              
              {/* Alternative Secondary CTA */}
              <a
                href="/work"
                className="btn btn-outline border-base-300 text-base-content hover:bg-base-200 px-8 py-4 font-medium text-lg"
              >
                See Our Work First
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-primary/20">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-base-content/60">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No-obligation consultation</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-base-content/20"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Response within 24 hours</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-base-content/20"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Focused on your business needs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Company Note */}
          <div className="mt-8">
            <p className="text-sm text-base-content/50">
              Appriyo — Building reliable software solutions since 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;