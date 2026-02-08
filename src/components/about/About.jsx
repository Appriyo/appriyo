import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Small Team, Direct Collaboration',
      description: 'You work directly with the engineers building your system — no layers, no handoffs.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Clear, Practical Communication',
      description: 'Straightforward updates focused on progress, risks, and decisions.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Maintainable Systems',
      description: 'Clean architecture that is easy to extend, support, and evolve.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Long-Term Responsibility',
      description: 'We design systems with future changes, growth, and support in mind.'
    }
  ];

  const values = [
    {
      title: 'Clarity',
      description: 'We avoid unnecessary complexity — technically and in communication.'
    },
    {
      title: 'Ownership',
      description: 'We stay accountable beyond delivery, including support and iteration.'
    },
    {
      title: 'Practical Quality',
      description: 'Balanced decisions that consider cost, speed, and reliability.'
    },
    {
      title: 'Iteration',
      description: 'Systems improve through real-world use, not assumptions.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SEO */}
        <p className="sr-only">
          Appriyo builds custom software systems for automation, internal tools, and business platforms.
        </p>

        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            About Appriyo
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Software built around how businesses actually work
          </h1>

          <p className="text-lg text-base-content/70 leading-relaxed">
            We partner with founders and growing businesses to solve operational problems
            using practical, maintainable software — without unnecessary complexity.
          </p>
        </header>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">How We Think</h3>
              <p className="text-base-content/70 mb-4">
                We start by understanding how your business actually runs — the workarounds,
                bottlenecks, and real-world constraints.
              </p>
              <p className="text-base-content/70">
                Once the problem is clear, we design systems that fit naturally into your workflow.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Who We Work With</h3>
              <p className="text-base-content/70">
                Small to mid-sized businesses, startups, and service teams that want reliable systems
                — not bloated software.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">How We Work</h3>
              <ul className="space-y-3">
                {[
                  'Clear communication throughout the project',
                  'Careful planning before development',
                  'Clean, maintainable code',
                  'Long-term support and iteration'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-base-content/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <article key={i} className="bg-base-100 border border-base-300 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{h.title}</h4>
                    <p className="text-sm text-base-content/70">{h.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Working Principles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-base-300 rounded-xl p-6">
                <h4 className="font-semibold mb-2">{v.title}</h4>
                <p className="text-sm text-base-content/70">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-base-content/70 mb-8">
            Looking for a reliable long-term development partner?
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="btn btn-primary px-8">Contact Us</a>
            <a href="#services" className="btn btn-outline px-8">View Services</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
