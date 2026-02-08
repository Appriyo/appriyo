import React from "react";
import { SERVICES_OVERVIEW_CONTENT } from "../../data/servicesOverviewContent";

const toneClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  neutral: "bg-neutral/10 text-neutral",
};

const ServicesOverview = () => {
  const { eyebrow, heading, description, services, cta } =
    SERVICES_OVERVIEW_CONTENT;

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-base-content/70">
            {description}
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-base-300 bg-base-100 p-5
                         hover:shadow-md transition-all"
            >
              <div
                className={`mb-4 inline-flex rounded-xl p-3 ${toneClasses[service.tone]}`}
              >
                <ServiceIcon name={service.icon} />
              </div>

              <h3 className="text-base font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-base-content/65 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={cta.href} className="btn btn-outline btn-lg px-10">
            {cta.label}
          </a>
          <p className="mt-3 text-sm text-base-content/50">
            {cta.helper}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;

const ServiceIcon = ({ name }) => {
  const base = "w-5 h-5";

  switch (name) {
    case "code":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "automation":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            d="M5 12h14M7 6h10M7 18h10" />
        </svg>
      );
    case "mobile":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "integration":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656" />
        </svg>
      );
    case "insights":
      return (
        <svg className={base} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            d="M11 3v18M5 9h14" />
        </svg>
      );
    default:
      return null;
  }
};
