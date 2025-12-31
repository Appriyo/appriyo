import React from 'react';

const SolutionsOverview = () => {
  const solutions = [
    {
      id: 1,
      title: 'Automating Manual Operations',
      problem: 'Repetitive tasks and manual processes slowing down your business growth.',
      approach: 'We identify automation opportunities and implement reliable workflow systems.',
      outcome: 'Reduced operational costs and increased team productivity.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'primary'
    },
    {
      id: 2,
      title: 'Validating Startup Ideas (MVPs)',
      problem: 'High development costs for untested concepts risking valuable resources.',
      approach: 'Lean development focused on core features for rapid market validation.',
      outcome: 'Data-driven decisions and controlled investment in proven ideas.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Building Internal Business Tools',
      problem: 'Generic software that doesn\'t match your unique workflow requirements.',
      approach: 'Custom applications designed specifically for your business processes.',
      outcome: 'Improved efficiency, better control, and scalable operations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'accent'
    }
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase">
            <div className="w-8 h-px bg-primary"></div>
            BUSINESS SOLUTIONS
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
            Solutions Built for{' '}
            <span className="text-primary">Real Business Problems</span>
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            We focus on understanding your challenges first, then building technology that delivers measurable results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="border border-base-300 rounded-xl bg-base-100 p-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Solution Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-${solution.color}/10 text-${solution.color}`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-base-content">
                  {solution.title}
                </h3>
              </div>

              {/* Problem Statement */}
              <div className="mb-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-error mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.404 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-base-content/70 mb-1">The Problem</h4>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {solution.problem}
                    </p>
                  </div>
                </div>
              </div>

              {/* Appriyo's Approach */}
              <div className="mb-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-primary mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-base-content/70 mb-1">Our Approach</h4>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {solution.approach}
                    </p>
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="pt-5 border-t border-base-300">
                <div className="flex items-start gap-3">
                  <div className="text-success mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-base-content/70 mb-1">The Outcome</h4>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {solution.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 pt-8 border-t border-base-300 text-center">
          <p className="text-base-content/70 text-sm">
            We don't just build software—we solve business problems with technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;