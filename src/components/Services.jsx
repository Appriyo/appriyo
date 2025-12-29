import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Custom Software Development',
      description: 'Build applications that address your specific operational needs and improve efficiency.',
      features: [
        'Workflow automation',
        'System integration',
        'Process optimization'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Secure Application Development',
      description: 'Reliable applications built with security and maintainability as primary considerations.',
      features: [
        'Secure coding practices',
        'Data protection measures',
        'Regular maintenance planning'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Cross-Platform Solutions',
      description: 'Applications that work consistently across web and mobile platforms.',
      features: [
        'Responsive design implementation',
        'Cross-browser compatibility',
        'Performance optimization'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <header className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
            Our Services
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-6">
            Development Services Focused on Business Impact
          </h2>
          
          <p className="text-base-content/70 text-lg leading-relaxed">
            We partner with businesses to develop practical software solutions. 
            Our approach emphasizes careful planning, clear communication, and reliable execution.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <article 
              key={index}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-300 h-full hover:border-primary/20"
            >
              <div className="card-body p-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-base-content mb-4">
                  {service.title}
                </h3>
                
                <p className="text-base-content/70 mb-6 grow">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base-content/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <button 
                    className="text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-300 inline-flex items-center group"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn more about this service</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-base-content/70 mb-8">
              Looking for a reliable development partner?
            </p>
            <button 
              className="btn btn-primary px-10 py-3 text-lg font-medium"
              aria-label="Start a conversation about your project"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;