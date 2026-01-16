import React, { useState } from 'react';
import { CONTACT_CONTENT as CONTENT } from '../../data/ContactData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here (e.g., EmailJS)
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  // WhatsApp Intent logic
  const whatsappLink = `https://wa.me/${CONTENT.whatsappNumber}?text=Hello%20Appriyo%20Team,%20I%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
            {CONTENT.badge}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-6">
            {CONTENT.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-base-content/70 leading-relaxed">
              {CONTENT.description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info & Trust */}
          <div className="space-y-8">
            
            {/* What to Expect */}
            <div className="bg-base-100 border border-base-300 rounded-box p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-base-content mb-4">What to Expect</h3>
              <div className="space-y-6">
                {CONTENT.expectations.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-base-content mb-1">{step.title}</h4>
                      <p className="text-base-content/70 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="bg-base-100 border border-base-300 rounded-box p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-base-content mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email Link */}
                <a href={`mailto:${CONTENT.contactDetails.email}`} className="block group">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-base-content group-hover:text-primary transition-colors">Email</span>
                  </div>
                  <p className="text-base-content/70 ml-8">{CONTENT.contactDetails.email}</p>
                </a>

                {/* Google Maps Link */}
                <a href={CONTENT.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="font-medium text-base-content group-hover:text-primary transition-colors">Location</span>
                  </div>
                  <p className="text-base-content/70 ml-8">{CONTENT.contactDetails.location}</p>
                </a>

                {/* WhatsApp Button */}
                <div className="pt-2">
                  <a 
                    href={whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500/10 hover:bg-green-500/20 text-green-600 p-4 rounded-xl transition-all border border-green-500/20"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.589.943 3.194 1.442 4.81 1.443 5.424 0 9.837-4.413 9.84-9.84.002-2.628-1.023-5.1-2.887-6.963-1.864-1.864-4.332-2.887-6.962-2.889-5.425 0-9.838 4.413-9.84 9.839-.001 1.738.457 3.431 1.328 4.912l-1.082 3.95 4.053-1.062z" />
                    </svg>
                    <span className="font-bold text-sm">Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-base-100 border border-base-300 rounded-box p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-base-300 rounded-box bg-base-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Your full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-base-300 rounded-box bg-base-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="your.email@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Project Type</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-base-300 rounded-box bg-base-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                    {CONTENT.serviceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">Project Details *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 border border-base-300 rounded-box bg-base-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder="Describe your project requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-3 px-6 bg-primary text-primary-content font-bold rounded-box hover:brightness-95 transition-all shadow-md active:scale-[0.98]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;