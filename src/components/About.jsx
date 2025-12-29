import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Small Team, Focused Collaboration',
      description: 'Work directly with the developers building your product — no middle layers.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Clear Communication',
      description: 'Regular, straightforward updates — no surprises, no technical jargon.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Clean & Maintainable Code',
      description: 'Built to last — clean structure that\'s easy to update and extend.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Long-Term Support Mindset',
      description: 'Solutions designed to evolve with your business over time.'
    }
  ];

  const values = [
    {
      title: 'Transparency',
      description: 'Clear communication about progress, challenges, and timelines.'
    },
    {
      title: 'Responsibility',
      description: 'Taking ownership of projects from start to ongoing support.'
    },
    {
      title: 'Quality Over Speed',
      description: 'Balancing timely delivery with well-considered solutions.'
    },
    {
      title: 'Continuous Improvement',
      description: 'Regularly refining our processes based on what works best.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hidden SEO content */}
        <p className="sr-only">
          Appriyo is a software development company providing web and business application solutions.
        </p>

        {/* Section Header */}
        <header className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
            About Us
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-6">
            Building Reliable Software for Real Businesses
          </h2>
          
          <p className="text-base-content/70 text-lg leading-relaxed">
            Appriyo is a software development company focused on creating practical, 
            well-built applications that help businesses operate more effectively.
          </p>
        </header>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-base-content mb-4">
                Our Approach
              </h3>
              <p className="text-base-content/70 leading-relaxed mb-6">
                We focus on understanding the problem first, then building solutions that are 
                practical, maintainable, and aligned with business goals. We believe good 
                software solves real problems without unnecessary complexity.
              </p>
              
              <p className="text-base-content/70 leading-relaxed">
                Our process emphasizes clear communication, thoughtful planning, and attention 
                to the details that matter for long-term success. We work with you to ensure 
                what we build today will still serve you well in the future.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-base-content mb-4">
                Who We Work With
              </h3>
              <p className="text-base-content/70 leading-relaxed mb-6">
                We primarily work with small to mid-sized businesses, startups, 
                and service providers who want to improve operations, 
                automate workflows, or build reliable digital products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-base-content mb-4">
                How We Work
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base-content/70">Clear communication throughout the project</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base-content/70">Thoughtful planning and requirement analysis</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base-content/70">Focus on maintainable, clean code structure</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base-content/70">Long-term support and iterative improvement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <article 
                key={index}
                className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="card-body p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-base-content mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-base-content/70">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-base-content text-center mb-8 lg:mb-12">
            Our Working Principles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <article 
                key={index}
                className="card bg-base-100 border border-base-300 border-t-2 border-t-primary/40 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="card-body p-6">
                  <h4 className="text-lg font-semibold text-base-content mb-3">
                    {value.title}
                  </h4>
                  <p className="text-base-content/70 text-sm">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Soft CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-base-content/70 mb-8">
              If you're looking for a reliable development partner who focuses on building 
              solutions that last, we'd be happy to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="btn btn-primary px-8"
                aria-label="Contact us to discuss your project"
              >
                Contact Us
              </a>
              <a 
                href="#services" 
                className="btn btn-outline border-base-300 text-base-content hover:border-primary hover:text-primary px-8"
                aria-label="View our services"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;