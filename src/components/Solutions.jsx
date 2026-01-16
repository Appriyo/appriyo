import React from "react";
import { Link } from "react-router-dom";
import { solutionsData } from "../data/solutionsData";

const Solutions = () => {
  return (
    <section className="py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Solutions
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Practical Solutions for Real Business Problems
          </h2>

          <p className="text-base-content/70 text-lg">
            Each solution is designed to solve a specific operational challenge
            with measurable business impact.
          </p>
        </header>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((solution) => (
            <article
              key={solution.id}
              className="border border-base-300 rounded-xl p-8 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {solution.title}
              </h3>

              <p className="text-base-content/70 mb-6">
                {solution.shortDescription}
              </p>

              <Link
                to={`/solutions/${solution.id}`}
                className="text-primary font-medium text-sm inline-flex items-center group"
              >
                View solution details
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;