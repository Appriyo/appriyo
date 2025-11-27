import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React/Next.js Development', 'Responsive Design', 'Performance Optimization', 'SEO Implementation'],
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
      features: ['React Native Apps', 'Flutter Development', 'Native iOS/Android', 'App Store Deployment'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions to ensure your applications run smoothly and securely.',
      features: ['AWS/Azure/GCP Setup', 'DevOps & CI/CD', 'Serverless Architecture', 'Database Management'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: '🔧',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and optimize your digital infrastructure.',
      features: ['Technical Strategy', 'System Architecture', 'Digital Transformation', 'Security Audits'],
      gradient: 'from-green-500 to-cyan-500'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and experiences that engage users and drive conversions.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence to automate processes and gain valuable insights.',
      features: ['Custom AI Models', 'Machine Learning', 'Data Analytics', 'Process Automation'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Crafting intuitive user interfaces and interactive prototypes.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless launch and ongoing maintenance with 24/7 support.'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-1000"></div>
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
            <span className="text-sm font-medium text-cyan-400 tracking-wider">OUR SERVICES</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transform Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Digital Vision
            </span>
          </h2>

          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Comprehensive technology solutions tailored to drive your business forward. 
            From concept to deployment, we deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
            >
              <div className={`text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <button className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure your project's success from conception to launch and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-purple-500/30 hover:scale-105 h-full">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-12 transition-all duration-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-primary btn-lg group relative overflow-hidden border-0 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white min-w-[200px]">
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
              <button className="btn btn-outline btn-lg group border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white min-w-[200px]">
                <span className="group-hover:text-white transition-colors duration-300">View Our Work</span>
                <div className="w-0 group-hover:w-5 h-0.5 bg-cyan-400 transition-all duration-300 ml-2"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;