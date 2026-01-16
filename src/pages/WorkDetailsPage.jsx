import { useParams, Navigate } from "react-router-dom";
import { workData } from "../data/workData";

const WorkDetailsPage = () => {
  const { id } = useParams();
  const project = workData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <section className="py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto max-w-5xl px-4">

        <header className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-base-content/70">
            {project.fullDescription}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Technology Stack
            </h2>
            <ul className="space-y-3">
              {project.technologies.map((tech, i) => (
                <li key={i}>✔ {tech}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">
              Measurable Results
            </h2>
            <ul className="space-y-3">
              {project.results.map((r, i) => (
                <li key={i}>
                  <strong>{r.metric}</strong> — {r.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-base-200 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">
            Business Impact
          </h3>
          <p className="text-base-content/80">
            {project.businessImpact}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkDetailsPage;
