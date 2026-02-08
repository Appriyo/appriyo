import React from "react";
import { SERVICES_PAGE_CONTENT } from "../data/servicesPageContent";

const Services = () => {
  const { header, services } = SERVICES_PAGE_CONTENT;

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            {header.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {header.title}
          </h1>
          <p className="text-lg text-base-content/70 leading-relaxed">
            {header.description}
          </p>
        </header>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-base-300 bg-base-100 p-8 hover:shadow-md transition-all"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <ServiceIcon name={service.icon} />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-base-content/70 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-base-content/80 text-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

const ServiceIcon = ({ name }) => {
  const cls = "w-6 h-6";

  switch (name) {
    case "rocket":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M5 13l4 4L19 7" /></svg>;
    case "building":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 21h18M9 8h6M9 12h6M9 16h6" /></svg>;
    case "refresh":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M4 4v6h6M20 20v-6h-6" /></svg>;
    case "layers":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M12 2l10 6-10 6-10-6z" /></svg>;
    case "credit-card":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 10h18M5 15h4" /></svg>;
    case "chat":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M8 10h8M8 14h5" /></svg>;
    default:
      return null;
  }
};
