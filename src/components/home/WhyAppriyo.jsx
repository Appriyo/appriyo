import React from 'react';

const WhyAppriyo = () => {
  const values = [
    {
      id: 1,
      title: 'Direct Technical Partnership',
      description: 'Work directly with senior engineers—no project managers or communication barriers between you and the team building your software.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'primary'
    },
    {
      id: 2,
      title: 'Transparent Development Process',
      description: 'Regular progress reviews, clear documentation, and open discussions about technical decisions and project adjustments.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Sustainable Code Standards',
      description: 'Clean, documented, and maintainable code that your team can understand and build upon for years to come.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'accent'
    },
    {
      id: 4,
      title: 'Long-Term Support Commitment',
      description: 'We build with future maintenance, updates, and scalability as foundational requirements from day one.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'neutral'
    }
  ];

  // Static color mapping for production safety
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    neutral: 'bg-neutral/10 text-neutral'
  };

  const sectionId = 'why-appriyo';

  return (
    <section 
      id={sectionId} 
      className="py-16 md:py-24 bg-base-100"
      aria-labelledby="why-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header with SEO-optimized positioning */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase" aria-hidden="true">
            <div className="w-8 h-px bg-primary"></div>
            OUR APPROACH
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 id="why-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
            A Reliable Software Development Partner
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            Appriyo operates as your dedicated technology partner, combining technical expertise with 
            business understanding to deliver solutions that work for the long term.
          </p>
        </header>

        {/* Values Grid - Position as operational principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value) => (
            <article 
              key={value.id}
              className="border border-base-300 rounded-xl bg-base-100 p-6 hover:shadow-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary/50"
            >
              {/* Value Icon */}
              <div className={`inline-flex p-3 rounded-lg mb-4 ${colorClasses[value.color]}`}>
                {value.icon}
              </div>
              
              {/* Value Title */}
              <h3 className="text-lg font-semibold text-base-content mb-3">
                {value.title}
              </h3>
              
              {/* Value Description - Concise and specific */}
              <p className="text-base-content/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        {/* Partnership Statement - Builds trust and reduces anxiety */}
        <div className="mt-12 pt-8 border-t border-base-300">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6" aria-hidden="true">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-base-content mb-4">
              Partnership, Not Just Development
            </h3>
            
            <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
              We take ownership of project success, working collaboratively to ensure your software investment 
              delivers sustainable value and aligns with your business objectives.
            </p>
            
            {/* Subtle CTA for partnership discussions */}
            <div className="pt-4 border-t border-base-300">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Discuss a potential software development partnership with Appriyo"
              >
                <span>Discuss Your Project Requirements</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <p className="mt-3 text-xs text-base-content/50">
                Initial consultation • Technical assessment • Clear project scope
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAppriyo;