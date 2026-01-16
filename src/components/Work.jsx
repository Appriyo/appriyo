import React, { useState } from "react";
import { Link } from "react-router-dom";
import { workData } from "../data/workData";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
    { id: "cloud", name: "Cloud" }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? workData
      : workData.filter(p => p.category === activeFilter);

  const featuredProjects = workData.filter(p => p.featured);

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 text-sm rounded-lg ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-content"
                  : "border border-base-300"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Featured */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map(project => (
            <article
              key={project.id}
              className="border border-base-300 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-base-content/70 mb-6">
                {project.shortDescription}
              </p>

              <Link
                to={`/work/${project.id}`}
                className="text-primary font-medium"
              >
                View case study →
              </Link>
            </article>
          ))}
        </div>

        {/* All */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter(p => !p.featured)
            .map(project => (
              <article
                key={project.id}
                className="border border-base-300 rounded-lg p-5"
              >
                <h4 className="font-semibold mb-3">
                  {project.title}
                </h4>
                <p className="text-sm text-base-content/70 mb-4">
                  {project.shortDescription}
                </p>

                <Link
                  to={`/work/${project.id}`}
                  className="text-primary text-sm font-medium"
                >
                  View details →
                </Link>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
