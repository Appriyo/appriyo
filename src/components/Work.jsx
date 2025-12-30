import React, { useState, useEffect } from 'react';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'design', name: 'UI/UX' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Enterprise E-Commerce Platform',
      category: 'web',
      description: 'Built a scalable e-commerce solution for a Fortune 500 retail client, handling 10,000+ concurrent users.',
      image: '/api/placeholder/800/450',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: [
        { metric: '40%', label: 'Conversion Rate Increase' },
        { metric: '2.5s', label: 'Average Page Load Time' },
        { metric: '99.9%', label: 'System Uptime' }
      ],
      businessImpact: 'Increased annual revenue by $4.2M through improved conversion rates and reduced cart abandonment.',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Mobile Application',
      category: 'mobile',
      description: 'Developed a HIPAA-compliant mobile app for a healthcare provider serving 50,000+ patients.',
      image: '/api/placeholder/800/450',
      technologies: ['React Native', 'Firebase', 'Python', 'PostgreSQL'],
      results: [
        { metric: '500K+', label: 'Patient Downloads' },
        { metric: '4.8★', label: 'App Store Rating' },
        { metric: '85%', label: 'User Retention' }
      ],
      businessImpact: 'Reduced administrative costs by 35% and improved patient satisfaction scores by 42%.',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration for Financial Services',
      category: 'cloud',
      description: 'Migrated legacy systems to AWS for a regional bank, ensuring regulatory compliance and scalability.',
      image: '/api/placeholder/800/450',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Python'],
      results: [
        { metric: '60%', label: 'Infrastructure Cost Reduction' },
        { metric: '5x', label: 'Processing Speed Improvement' },
        { metric: 'Zero', label: 'Security Incidents' }
      ],
      businessImpact: 'Annual infrastructure savings of $1.8M while improving system reliability and scalability.',
      featured: false
    },
    {
      id: 4,
      title: 'Banking Dashboard Redesign',
      category: 'design',
      description: 'Redesigned core banking interfaces for improved usability and accessibility compliance.',
      image: '/api/placeholder/800/450',
      technologies: ['Figma', 'React', 'TypeScript', 'WCAG 2.1'],
      results: [
        { metric: '92%', label: 'User Satisfaction' },
        { metric: '70%', label: 'Task Completion Speed' },
        { metric: '100%', label: 'Accessibility Compliance' }
      ],
      businessImpact: 'Reduced customer service calls by 45% and improved first-time user success rate by 68%.',
      featured: false
    },
    {
      id: 5,
      title: 'Supply Chain Management System',
      category: 'web',
      description: 'Custom web application for global logistics company managing 500+ daily shipments.',
      image: '/api/placeholder/800/450',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'Docker'],
      results: [
        { metric: '30%', label: 'Operational Efficiency Gain' },
        { metric: '99.5%', label: 'Order Accuracy' },
        { metric: '24/7', label: 'System Availability' }
      ],
      businessImpact: 'Saved $2.1M annually in operational costs through automation and improved tracking.',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics Platform',
      category: 'cloud',
      description: 'Real-time analytics dashboard for manufacturing client processing 10TB+ of data daily.',
      image: '/api/placeholder/800/450',
      technologies: ['Python', 'Apache Spark', 'Kafka', 'Tableau'],
      results: [
        { metric: 'Real-time', label: 'Data Processing' },
        { metric: '95%', label: 'Forecast Accuracy' },
        { metric: '10x', label: 'Reporting Speed' }
      ],
      businessImpact: 'Enabled data-driven decision making that reduced waste by 28% and improved yield by 15%.',
      featured: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechInnovate Inc',
      role: 'Chief Technology Officer',
      content: 'Appriyo delivered exactly what we needed—reliable, scalable solutions that drive business results. Their approach is professional and results-focused.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Corp',
      role: 'Director of Digital Transformation',
      content: 'We chose Appriyo for their technical expertise and business understanding. The platform they built handles our peak traffic without issues.',
      avatar: 'MC'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className="py-20 bg-base-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header - Simple and Professional */}
        <div className={`text-center mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary border border-base-300 rounded-full px-4 py-2">
              CASE STUDIES
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-6">
            Work That{' '}
            <span className="text-primary">Solves</span>{' '}
            Real Problems
          </h2>
          
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto leading-relaxed">
            Proven solutions that deliver measurable business impact for enterprise clients.
          </p>
        </div>

        {/* Category Filter - Clean and Professional */}
        <div className={`mb-12 transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-content shadow-sm'
                    : 'text-base-content/70 hover:text-base-content border border-base-300 bg-base-200 hover:bg-base-300'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies - Maximum 2 */}
        <div className={`mb-20 transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-base-300 rounded-xl bg-base-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Project Image - Real dashboard/app screenshots */}
                <div className="relative h-64 bg-base-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-48 bg-base-300 rounded-lg border border-base-300">
                      {/* Simulated dashboard/content */}
                      <div className="p-4 h-full">
                        <div className="flex gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full bg-error"></div>
                          <div className="w-3 h-3 rounded-full bg-warning"></div>
                          <div className="w-3 h-3 rounded-full bg-success"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-6 bg-base-200 rounded"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-base-content">{project.title}</h3>
                    <span className="text-xs font-medium uppercase text-base-content/60 bg-base-200 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-base-content/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs text-base-content/70 border border-base-300 rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Measurable Results */}
                  <div className="border-t border-base-300 pt-6">
                    <h4 className="text-sm font-semibold uppercase text-base-content/60 mb-4">
                      Measurable Results
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-primary">{result.metric}</div>
                          <div className="text-xs text-base-content/60 mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div className="mt-6 pt-6 border-t border-base-300">
                    <div className="flex items-start gap-3">
                      <div className="text-success mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-base-content/80">
                        <span className="font-medium">Business Impact:</span> {project.businessImpact}
                      </p>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-content transition-colors duration-300">
                    View Detailed Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid - Clean and Organized */}
        <div className={`mb-20 transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-base-content mb-8 text-center">
            Additional Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter(project => !project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="border border-base-300 rounded-lg bg-base-100 p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-base-content">{project.title}</h4>
                    <span className="text-xs font-medium text-base-content/60 bg-base-200 rounded-full px-2 py-1">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-base-content/80 mb-5 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-base-content/60">
                      {project.technologies.slice(0, 2).join(', ')}
                      {project.technologies.length > 2 && ' +' + (project.technologies.length - 2)}
                    </div>
                    <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors duration-300">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Testimonials - Subtle and Professional */}
        <div className={`mb-16 transition-opacity duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-base-content mb-8 text-center">
            Client Feedback
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-base-300 rounded-lg bg-base-100 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center text-base-content font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-base-content">{testimonial.name}</div>
                    <div className="text-sm text-base-content/60">{testimonial.role}</div>
                    <div className="text-xs text-base-content/40">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-base-content/80 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - Calm and Professional */}
        <div className={`transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="border border-base-300 rounded-xl bg-base-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Have a project in mind?
            </h3>
            <p className="text-base-content/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can build reliable, scalable solutions that deliver real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-primary px-8 py-3 font-medium">
                Start Your Project
              </button>
              <button className="btn btn-outline border-base-300 text-base-content hover:bg-base-200 px-8 py-3 font-medium">
                View All Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;