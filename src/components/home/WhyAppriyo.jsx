import React from 'react';

const WhyAppriyo = () => {
  const features = [
    {
      id: 1,
      title: 'Small Team, Direct Collaboration',
      description: 'Work directly with experienced developers—no layers of management or miscommunication.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'primary'
    },
    {
      id: 2,
      title: 'Clear Communication',
      description: 'Regular updates and transparent discussions about progress, challenges, and decisions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Clean & Maintainable Code',
      description: 'We write code that your team can understand, modify, and build upon for years.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'accent'
    },
    {
      id: 4,
      title: 'Long-Term Support Mindset',
      description: 'We build with future maintenance and scalability in mind from day one.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'primary'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase">
            <div className="w-8 h-px bg-primary"></div>
            WHY CHOOSE US
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
            Why Choose Appriyo
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            We believe successful partnerships are built on trust, transparency, and technical excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group border border-base-300 rounded-xl bg-base-100 p-6 hover:shadow-md transition-all duration-300 hover:border-primary/30"
            >
              {/* Feature Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-${feature.color}/10 text-${feature.color} mb-4`}>
                {feature.icon}
              </div>
              
              {/* Feature Title */}
              <h3 className="text-lg font-semibold text-base-content mb-3">
                {feature.title}
              </h3>
              
              {/* Feature Description */}
              <p className="text-base-content/70 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle Divider */}
              <div className="mt-4 pt-4 border-t border-base-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-primary">
                  Core principle →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Builder Statement */}
        <div className="mt-12 pt-8 border-t border-base-300 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            We're not just developers—we're partners who take responsibility for the success of your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAppriyo;