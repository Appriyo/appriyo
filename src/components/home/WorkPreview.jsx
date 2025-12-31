import React from 'react';

const WorkPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'Retail Inventory System',
      problem: 'Manual stock tracking causing frequent stockouts and overordering.',
      result: 'Reduced inventory discrepancies by 95% and cut stockout incidents by 80%.',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Service Booking Platform',
      problem: 'Paper-based booking system leading to scheduling conflicts and no-shows.',
      result: 'Automated scheduling reduced no-shows by 70% and increased bookings by 40%.',
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'Manufacturing Dashboard',
      problem: 'Scattered production data making real-time decision-making impossible.',
      result: 'Centralized monitoring improved production efficiency by 35% through data visibility.',
      category: 'Business Intelligence'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase">
            <div className="w-8 h-px bg-primary"></div>
            PROVEN RESULTS
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
            Our Work
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Real projects delivering measurable business impact through focused technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-base-300 rounded-xl bg-base-100 p-6 hover:shadow-md transition-all duration-300 hover:border-primary/30"
            >
              {/* Project Category */}
              <div className="mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                  {project.category}
                </span>
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-base-content mb-4">
                {project.title}
              </h3>
              
              {/* Problem Solved */}
              <div className="mb-4">
                <div className="flex items-start gap-3">
                  <div className="text-error mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.404 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-base-content/70 mb-1">Challenge</p>
                    <p className="text-base-content/80 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                </div>
              </div>
              
              {/* Result */}
              <div className="pt-4 border-t border-base-300">
                <div className="flex items-start gap-3">
                  <div className="text-success mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-base-content/70 mb-1">Result</p>
                    <p className="text-base-content/80 text-sm leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </div>
              
              {/* Learn More Link */}
              <div className="mt-6 pt-4 border-t border-base-300">
                <a 
                  href={`/work#project-${project.id}`}
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  View details
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-3.5 font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-300 hover:shadow-md group"
          >
            <span>View Case Studies</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          {/* Trust Builder Note */}
          <p className="mt-4 text-sm text-base-content/50 max-w-md mx-auto">
            Detailed breakdowns of how we solved complex business problems for our clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;