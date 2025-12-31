import React from 'react';

const SolutionsOverview = () => {
  const solutions = [
    {
      id: 1,
      title: 'Business Process Automation',
      problem: 'Manual, repetitive tasks slowing growth and increasing operational costs.',
      approach: 'We analyze workflows and implement reliable automation systems tailored to your operations.',
      outcome: 'Increased efficiency, reduced errors, and scalable business processes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'primary'
    },
    {
      id: 2,
      title: 'Custom Software Development',
      problem: 'Off-the-shelf solutions failing to match your unique business requirements.',
      approach: 'Tailored application development focused on solving specific operational challenges.',
      outcome: 'Optimized workflows, better data control, and competitive differentiation.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Digital Transformation Strategy',
      problem: 'Legacy systems and outdated processes hindering growth and innovation.',
      approach: 'Phased modernization plans that prioritize high-impact areas first.',
      outcome: 'Future-ready operations, improved scalability, and sustainable competitive advantage.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'accent'
    }
  ];

  // Static color mapping to avoid dynamic class names
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent'
  };

  const sectionId = 'business-solutions';

  return (
    <section 
      id={sectionId} 
      className="py-16 md:py-24 bg-base-100"
      aria-labelledby="solutions-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header with SEO-optimized content */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase" aria-hidden="true">
            <div className="w-8 h-px bg-primary"></div>
            OUR APPROACH
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 id="solutions-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
            Business-Focused Technology Solutions
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            Appriyo partners with businesses across Bangladesh and beyond to deliver custom software solutions 
            that address real operational challenges and drive measurable growth.
          </p>
        </header>

        {/* Solutions Grid - Cleaner structure for homepage */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution) => (
            <article 
              key={solution.id}
              className="border border-base-300 rounded-xl bg-base-100 p-6 hover:shadow-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary/50"
            >
              {/* Solution Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg ${colorClasses[solution.color]}`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-base-content">
                  {solution.title}
                </h3>
              </div>

              {/* Problem & Outcome - Simplified for homepage */}
              <div className="space-y-5">
                {/* Challenge */}
                <div className="mb-5">
                  <div className="flex items-start gap-3">
                    <div className="text-error shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.404 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-base-content/70 mb-1">Common Challenge</h4>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        {solution.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Appriyo's Solution - Combined approach/outcome */}
                <div className="pt-4 border-t border-base-300">
                  <div className="flex items-start gap-3">
                    <div className="text-success shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-base-content/70 mb-1">Our Solution</h4>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        {solution.approach} {solution.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section - Clear conversion path */}
        <div className="mt-12 pt-8 border-t border-base-300 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-base-content mb-3">
              Ready to transform your business operations?
            </h3>
            <p className="text-base-content/70 text-sm mb-6">
              Let's discuss how custom software solutions can address your specific challenges.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Schedule a consultation to discuss your business automation needs"
            >
              <span>Schedule a Strategy Session</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="mt-4 text-xs text-base-content/50">
              No-obligation consultation • Industry-specific insights • Clear roadmap proposal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;