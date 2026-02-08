import React from "react";

const SolutionsOverview = () => {
  const solutions = [
    {
      id: 1,
      title: "Business Process Automation",
      description: "Eliminate manual work and build scalable, efficient operations.",
    },
    {
      id: 2,
      title: "Custom Software Development",
      description: "Purpose-built applications tailored to your exact business needs.",
    },
    {
      id: 3,
      title: "Digital Transformation Strategy",
      description: "Modernize systems and processes with a clear, phased roadmap.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Solutions
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built Around Your Business Challenges
          </h2>

          <p className="text-lg text-base-content/70">
            We design solutions that simplify operations, improve visibility,
            and support long-term growth.
          </p>
        </header>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution) => (
            <article
              key={solution.id}
              className="border border-base-300 rounded-xl p-6 bg-base-100
                         hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">
                {solution.title}
              </h3>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {solution.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/solutions"
            className="btn btn-outline btn-lg px-10"
          >
            View All Solutions
          </a>
        </div>

      </div>
    </section>
  );
};

export default SolutionsOverview;