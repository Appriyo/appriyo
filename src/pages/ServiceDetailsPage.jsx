import { useParams, Navigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <section className="py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-base-content/70">
            {service.fullDescription}
          </p>
        </header>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-xl font-semibold mb-6">What we deliver</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3">✔</span>
                  <span className="text-base-content/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Why it matters</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3">✔</span>
                  <span className="text-base-content/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-base-200 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Let’s talk about your project
          </h3>
          <p className="text-base-content/70 mb-6">
            We’ll help you decide if this service is the right fit for your business.
          </p>
          <a href="/contact" className="btn btn-primary px-10">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;
