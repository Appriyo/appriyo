import React, { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        timeline: '',
        message: ''
      });
      // Show success message (you can implement a toast notification here)
      alert('Thank you for your message! We\'ll get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'hello@appriyo.com',
      description: 'Send us an email anytime',
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon to Fri, 9am to 6pm',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Available for meetings',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Start Chat',
      description: '24/7 customer support',
      gradient: 'from-green-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: '#',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Dribbble',
      icon: '🎨',
      url: '#',
      color: 'hover:text-pink-500'
    }
  ];

  const budgetOptions = [
    'Select Budget Range',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const timelineOptions = [
    'Select Timeline',
    'Immediately',
    'Within 1 Month',
    '1-3 Months',
    '3-6 Months',
    '6+ Months'
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen bg-gray-900 py-20 overflow-hidden">
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
            <span className="text-sm font-medium text-cyan-400 tracking-wider">GET IN TOUCH</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Let's Start Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Next Project
            </span>
          </h2>

          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together. 
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:scale-105"
                >
                  <div className={`text-2xl mb-4 w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{item.details}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-purple-400">🕐</span>
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-cyan-400 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-cyan-400 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`group p-3 rounded-xl border border-gray-700/50 bg-gray-800/30 text-gray-400 ${social.color} hover:border-cyan-500/30 hover:scale-110 transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-800/30 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  >
                    {budgetOptions.map((option, index) => (
                      <option key={index} value={option} className="bg-gray-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-800/30 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                >
                  {timelineOptions.map((option, index) => (
                    <option key={index} value={option} className="bg-gray-800">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary btn-lg group relative overflow-hidden border-0 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>

              <p className="text-gray-400 text-sm text-center mt-4">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-20 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-8 rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-lg shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Location</span>
            </h3>
            
            {/* Map Placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-300">Interactive Map</p>
                  <p className="text-gray-500 text-sm">San Francisco, California</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
              <div>
                <div className="text-cyan-400 font-semibold">Headquarters</div>
                <div className="text-gray-300">123 Tech Street</div>
                <div className="text-gray-300">San Francisco, CA 94105</div>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold">Development Center</div>
                <div className="text-gray-300">456 Innovation Drive</div>
                <div className="text-gray-300">Austin, TX 78701</div>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold">European Office</div>
                <div className="text-gray-300">789 Digital Lane</div>
                <div className="text-gray-300">London, UK EC1A 1BB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;