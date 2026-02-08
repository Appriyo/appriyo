import React from "react";
import { Link } from "react-router-dom";
import { solutionsData } from "../data/solutionsData";

const Solutions = () => {
  return (
    <section className="py-20 lg:py-28 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Solutions
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solving Real Business Problems with Technology
          </h1>

          <p className="text-lg text-base-content/70">
            Our solutions are built around operational challenges — not tools.
            Each one is designed to deliver measurable efficiency, clarity, and scalability.
          </p>
        </header>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution) => (
            <article
              key={solution.id}
              className="group border border-base-300 rounded-2xl p-8 bg-base-100
                         hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">
                {solution.title}
              </h3>

              <p className="text-base-content/70 mb-6 leading-relaxed">
                {solution.shortDescription}
              </p>

              <Link
                to={`/solutions/${solution.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <span>Explore solution</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-base-content/50">
            Strategy-led • Custom-built • Focused on long-term business value
          </p>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
