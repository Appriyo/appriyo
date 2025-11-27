import React, { useState, useRef, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const stats = [
    { number: '5+', label: 'Years Excellence', description: 'Pioneering digital innovation since 2019' },
    { number: '50+', label: 'Team Experts', description: 'Top-tier developers & strategists' },
    { number: '98%', label: 'Success Rate', description: 'Projects delivered on time and budget' },
    { number: '24/7', label: 'Global Support', description: 'Always here for our clients' },
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you competitive advantage.'
    },
    {
      icon: '💎',
      title: 'Quality Obsessed',
      description: 'Every line of code, every design element is crafted with precision and attention to detail.'
    },
    {
      icon: '🤝',
      title: 'Partnership Driven',
      description: 'We work as an extension of your team, understanding your business goals as our own.'
    },
    {
      icon: '⚡',
      title: 'Agile Execution',
      description: 'Rapid prototyping and iterative development to bring your vision to life faster.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
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
            <span className="text-sm font-medium text-cyan-400 tracking-wider">WHO WE ARE</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Building The Future,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Today
            </span>
          </h2>

          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We're not just developers; we're digital architects crafting intelligent solutions 
            that transform businesses and shape tomorrow's technology landscape.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Mission Statement */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="p-8 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-cyan-400">✨</span>
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance efficiency, and create meaningful impact in an ever-evolving technological world.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-purple-400">🎯</span>
                Why Trust Us?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a proven track record of delivering complex projects for global clients, 
                we combine technical expertise with strategic thinking to ensure your digital 
                success is not just achieved, but sustained.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:scale-105"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className={`transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-purple-500/30 hover:scale-105"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 50+ successful companies who trust us with their digital transformation journey.
            </p>
            <button className="btn btn-primary btn-lg group relative overflow-hidden border-0 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white">
              <span className="relative z-10">Start Your Project Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;