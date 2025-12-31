import React from 'react';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions that solve specific business challenges',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'primary'
    },
    {
      id: 2,
      title: 'Business Process Automation',
      description: 'Streamline operations and reduce manual work with smart automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform apps for modern business needs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'accent'
    },
    {
      id: 4,
      title: 'System Integration',
      description: 'Connect your existing tools and platforms seamlessly',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      color: 'primary'
    },
    {
      id: 5,
      title: 'AI-Assisted Workflows',
      description: 'Intelligent automation powered by machine learning',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'secondary'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary tracking-wider uppercase">
            <div className="w-8 h-px bg-primary"></div>
            SERVICES
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
            Our Core Services
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Professional software solutions designed to drive efficiency and growth for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 md:mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border border-base-300 rounded-xl bg-base-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
            >
              {/* Service Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 text-${service.color} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-lg font-semibold text-base-content mb-3">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-base-content/70 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Subtle Hover Indicator */}
              <div className="mt-4 pt-4 border-t border-base-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-primary">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-300 hover:shadow-md"
          >
            <span>View All Services</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <p className="mt-4 text-sm text-base-content/50">
            Detailed breakdown of our capabilities and approach
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;