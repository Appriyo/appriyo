import React, { useState, useEffect } from 'react';

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
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

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Professional SVG Icons Component
  const SolutionIcon = ({ type, className = "w-8 h-8" }) => {
    const icons = {
      automation: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      mvp: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      web: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      mobile: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      dashboard: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      ecommerce: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    };

    return icons[type] || icons.web;
  };

  const solutions = [
    {
      id: 1,
      title: 'Business Process Automation',
      iconType: 'automation',
      problem: 'Manual workflows causing delays and errors',
      problemExpanded: 'Repetitive tasks, data entry errors, and inconsistent processes slowing down operations and increasing operational costs.',
      forWhom: 'Operations teams, service providers, SMEs',
      approach: 'Workflow automation & tool integration',
      approachExpanded: 'We analyze your current processes, identify automation opportunities, and implement reliable systems that reduce manual effort while maintaining data integrity.',
      outcome: 'Time savings & operational efficiency',
      outcomeExpanded: 'Reduce manual work by 40-60%, minimize errors, and ensure consistent process execution across your organization.',
      proofPoints: [
        { label: 'Typical Impact', value: '40-60% time reduction' },
        { label: 'Delivery Time', value: '4-8 weeks' },
        { label: 'Use Cases', value: 'Invoice processing, CRM updates, report generation' }
      ],
      ctaLabel: 'Discuss Automation'
    },
    {
      id: 2,
      title: 'MVP Development',
      iconType: 'mvp',
      problem: 'Validating ideas without overspending',
      problemExpanded: 'High development costs and lengthy timelines for untested ideas, risking capital on unvalidated concepts.',
      forWhom: 'Startups, innovators, product teams',
      approach: 'Lean development of core features',
      approachExpanded: 'We build only essential features using rapid development methodologies, focusing on user feedback loops and iterative improvements.',
      outcome: 'Market validation & cost control',
      outcomeExpanded: 'Launch in weeks instead of months, gather real user feedback, and make data-driven decisions about product direction.',
      proofPoints: [
        { label: 'Typical Timeline', value: '3-6 weeks' },
        { label: 'Focus', value: 'Core features only' },
        { label: 'Outcome', value: 'Validated product direction' }
      ],
      ctaLabel: 'Discuss MVP'
    },
    {
      id: 3,
      title: 'Custom Web Platforms',
      iconType: 'web',
      problem: 'Generic tools limiting business growth',
      problemExpanded: 'Off-the-shelf solutions that don\'t match unique workflows, forcing workarounds and limiting scalability.',
      forWhom: 'Growing businesses, specialized services',
      approach: 'Tailored systems for specific needs',
      approachExpanded: 'We design and build web applications that align with your exact business processes, ensuring seamless integration with existing systems.',
      outcome: 'Scalability & operational control',
      outcomeExpanded: 'Systems that grow with your business, provide complete operational visibility, and adapt to changing requirements.',
      proofPoints: [
        { label: 'Typical Scope', value: 'Custom admin panels' },
        { label: 'Integration', value: 'Existing tools & APIs' },
        { label: 'Benefit', value: 'Workflow optimization' }
      ],
      ctaLabel: 'Discuss Web Platform'
    },
    {
      id: 4,
      title: 'Mobile Applications',
      iconType: 'mobile',
      problem: 'Customer engagement gaps',
      problemExpanded: 'Limited mobile presence reducing customer accessibility and creating communication barriers in service delivery.',
      forWhom: 'Service providers, customer-facing teams',
      approach: 'Native & cross-platform mobile apps',
      approachExpanded: 'We develop intuitive mobile applications that enhance customer experience through seamless booking, notifications, and service management.',
      outcome: 'Improved service delivery',
      outcomeExpanded: 'Increase customer satisfaction, reduce administrative overhead, and create new engagement channels with your audience.',
      proofPoints: [
        { label: 'Platforms', value: 'iOS, Android, Cross-platform' },
        { label: 'Key Feature', value: 'Push notifications' },
        { label: 'Impact', value: 'Higher engagement' }
      ],
      ctaLabel: 'Discuss Mobile App'
    },
    {
      id: 5,
      title: 'Business Intelligence Dashboards',
      iconType: 'dashboard',
      problem: 'Decision-making without data',
      problemExpanded: 'Scattered data sources and manual reporting preventing timely, informed business decisions.',
      forWhom: 'Managers, executives, analysts',
      approach: 'Real-time data visualization',
      approachExpanded: 'We consolidate your data sources into interactive dashboards that provide actionable insights and KPIs for strategic decision-making.',
      outcome: 'Data-driven decisions',
      outcomeExpanded: 'Monitor key metrics in real-time, identify trends early, and allocate resources based on actual performance data.',
      proofPoints: [
        { label: 'Data Sources', value: 'Multiple integrations' },
        { label: 'Update Frequency', value: 'Real-time' },
        { label: 'Benefit', value: 'Informed decisions' }
      ],
      ctaLabel: 'Discuss Dashboards'
    },
    {
      id: 6,
      title: 'E-commerce Solutions',
      iconType: 'ecommerce',
      problem: 'Limited online sales capabilities',
      problemExpanded: 'Outdated or inflexible e-commerce platforms restricting growth, customer experience, and operational efficiency.',
      forWhom: 'Retailers, manufacturers, distributors',
      approach: 'Scalable online store development',
      approachExpanded: 'We build modern e-commerce platforms with custom features, seamless payment integration, and efficient inventory management.',
      outcome: 'Revenue growth & efficiency',
      outcomeExpanded: 'Expand market reach, streamline order processing, and provide superior customer shopping experiences.',
      proofPoints: [
        { label: 'Key Features', value: 'Inventory, payments, analytics' },
        { label: 'Integration', value: 'Shipping & accounting' },
        { label: 'Result', value: 'Sales growth' }
      ],
      ctaLabel: 'Discuss E-commerce'
    }
  ];

  return (
    <section 
      id="solutions" 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-base-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header - More Professional */}
        <div className={`text-center mb-12 md:mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary">
            <div className="w-8 h-px bg-primary"></div>
            SOLUTIONS
            <div className="w-8 h-px bg-primary"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content mb-4 md:mb-6">
            Enterprise-Grade Solutions for{' '}
            <span className="text-primary">Modern Business Challenges</span>
          </h2>
          
          <p className="text-base md:text-lg text-base-content/70 max-w-3xl mx-auto">
            We design and build reliable digital solutions that address specific business pain points with measurable outcomes.
          </p>
        </div>

        {/* Solutions Grid - Improved Visual Hierarchy */}
        <div className={`transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className={`group border border-base-300 rounded-lg bg-base-100 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-md ${
                  expandedCard === solution.id ? 'shadow-md border-primary/50' : ''
                }`}
              >
                {/* Card Header - Scannable at a glance */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <SolutionIcon type={solution.iconType} className="w-6 h-6" />
                    </div>
                    <button
                      onClick={() => toggleCard(solution.id)}
                      className="p-1.5 rounded-md hover:bg-base-200 transition-colors"
                      aria-label={expandedCard === solution.id ? "Collapse details" : "Expand details"}
                    >
                      <svg 
                        className={`w-4 h-4 text-base-content/60 transition-transform duration-300 ${
                          expandedCard === solution.id ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-base-content mb-3">
                    {solution.title}
                  </h3>

                  {/* Problem Statement - Always Visible */}
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="text-error mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.404 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-base-content/90">
                        {solution.problem}
                      </p>
                    </div>
                  </div>

                  {/* Proof Points - Always Visible */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {solution.proofPoints.map((point, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs font-medium text-base-content/50 mb-1">{point.label}</div>
                        <div className="text-xs font-semibold text-primary">{point.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Content */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    expandedCard === solution.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-4 pt-4 border-t border-base-300">
                      {/* Expanded Problem */}
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <div className="text-info mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <p className="text-sm text-base-content/80 leading-relaxed">
                            <span className="font-medium">For:</span> {solution.forWhom}
                          </p>
                        </div>
                      </div>

                      {/* Expanded Approach */}
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <div className="text-primary mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <p className="text-sm text-base-content/80 leading-relaxed">
                            <span className="font-medium">Our Approach:</span> {solution.approachExpanded}
                          </p>
                        </div>
                      </div>

                      {/* Expanded Outcome */}
                      <div>
                        <div className="flex items-start gap-2">
                          <div className="text-success mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-sm text-base-content/80 leading-relaxed">
                            <span className="font-medium">Expected Outcome:</span> {solution.outcomeExpanded}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer with CTA */}
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={scrollToContact}
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {solution.ctaLabel} →
                    </button>
                    <span className="text-xs text-base-content/50">
                      {expandedCard === solution.id ? 'Tap to minimize' : 'Tap for details'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - More Professional */}
        <div className={`mt-16 transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-base-100 to-base-200 border border-base-300 rounded-xl p-8 md:p-10 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-base-content mb-3">
                Need a Custom Solution?
              </h3>
              <p className="text-base-content/70 mb-6">
                We specialize in building tailored solutions for unique business challenges. Let's discuss your specific requirements.
              </p>
              <button 
                onClick={scrollToContact}
                className="btn btn-primary px-8 py-3 font-medium"
              >
                Schedule a Consultation
              </button>
              <p className="text-sm text-base-content/50 mt-4">
                Response within 24 hours • No-obligation discussion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;