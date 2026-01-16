import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
            Our Services
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-6">
            Development Services Focused on Business Impact
          </h2>

          <p className="text-base-content/70 text-lg leading-relaxed">
            We partner with businesses to develop practical software solutions.
            Our approach emphasizes careful planning, clear communication, and
            reliable execution.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mb-16 lg:mb-20">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-300 h-full hover:border-primary/20"
            >
              <div className="card-body p-8 flex flex-col">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-base-content mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base-content/70 mb-6 grow">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-base-content/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="mt-auto">
                  <Link
                    to={`/services/${service.id}`}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-base-content/70 mb-8">
              Looking for a reliable development partner?
            </p>
            <Link
              to="/contact"
              className="btn btn-primary px-10 py-3 text-lg font-medium"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;