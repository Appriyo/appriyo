import React, { useState, useRef, useEffect } from 'react';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform with advanced analytics and seamless user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: [
        { metric: '40%', label: 'Conversion Increase' },
        { metric: '2.5x', label: 'Faster Load Time' },
        { metric: '99.9%', label: 'Uptime' }
      ],
      gradient: 'from-purple-500 to-cyan-500',
      featured: true
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'mobile',
      description: 'A comprehensive fitness tracking application with AI-powered workout recommendations.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Stripe'],
      results: [
        { metric: '500K+', label: 'Downloads' },
        { metric: '4.8★', label: 'App Store Rating' },
        { metric: '60%', label: 'User Retention' }
      ],
      gradient: 'from-cyan-500 to-blue-500',
      featured: true
    },
    {
      id: 3,
      title: 'Enterprise SaaS',
      category: 'cloud',
      description: 'Scalable SaaS platform for enterprise resource planning and management.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'Kubernetes', 'Python', 'PostgreSQL'],
      results: [
        { metric: '10x', label: 'Scalability' },
        { metric: '50%', label: 'Cost Reduction' },
        { metric: '24/7', label: 'Global Support' }
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Banking Dashboard',
      category: 'design',
      description: 'Modern banking dashboard with real-time analytics and financial insights.',
      image: '/api/placeholder/600/400',
      technologies: ['Figma', 'React', 'D3.js', 'WebSocket'],
      results: [
        { metric: '85%', label: 'User Satisfaction' },
        { metric: '3x', label: 'Task Efficiency' },
        { metric: '100%', label: 'Accessibility' }
      ],
      gradient: 'from-green-500 to-cyan-500'
    },
    {
      id: 5,
      title: 'Travel Booking Platform',
      category: 'web',
      description: 'Multi-service travel platform with integrated booking and recommendation engine.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'Docker'],
      results: [
        { metric: '2M+', label: 'Monthly Users' },
        { metric: '45%', label: 'Revenue Growth' },
        { metric: '95%', label: 'Booking Success' }
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'AI Content Generator',
      category: 'web',
      description: 'AI-powered content creation platform with advanced NLP capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'GPT-4', 'FastAPI', 'Redis'],
      results: [
        { metric: '10K+', label: 'Active Users' },
        { metric: '80%', label: 'Time Saved' },
        { metric: '4.9★', label: 'User Rating' }
      ],
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechInnovate Inc',
      role: 'CEO',
      content: 'Appriyo transformed our digital presence completely. Their attention to detail and technical expertise exceeded all expectations.',
      avatar: '/api/placeholder/100/100',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Corp',
      role: 'CTO',
      content: 'The mobile app they delivered increased our customer engagement by 300%. Truly remarkable work from a professional team.',
      avatar: '/api/placeholder/100/100',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthPlus',
      role: 'Product Director',
      content: 'Working with Appriyo was seamless. They understood our vision and delivered beyond what we imagined possible.',
      avatar: '/api/placeholder/100/100',
      rating: 5
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="work" ref={sectionRef} className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-cyan-400 tracking-wider">OUR WORK</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Featured
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Projects
            </span>
          </h2>

          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-300 border border-gray-700/50 bg-gray-800/20 hover:border-cyan-500/30 hover:text-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/50">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {result.metric}
                      </div>
                      <div className="text-xs text-gray-400">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full mt-6 py-3 rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 group">
                  View Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            All <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-purple-500/30 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white">{project.title}</h4>
                    <div className="text-xs text-cyan-400 capitalize mt-1">{project.category}</div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {renderStars(5)}
                    </div>
                    <button className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors duration-300">
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={`mb-20 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Client <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Testimonials</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-primary btn-lg group relative overflow-hidden border-0 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white min-w-[200px]">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
              <button className="btn btn-outline btn-lg group border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white min-w-[200px]">
                <span className="group-hover:text-white transition-colors duration-300">View All Projects</span>
                <div className="w-0 group-hover:w-5 h-0.5 bg-cyan-400 transition-all duration-300 ml-2"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;