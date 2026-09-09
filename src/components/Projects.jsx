import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      {PROJECTS.map((p) => (
        <article className="project-card" key={p.name}>
          <a className="project-image" href={p.githubUrl} target="_blank" rel="noreferrer">
            <img src={p.image} alt={`Screenshot of the ${p.name} dashboard`} loading="lazy" />
          </a>
          <div className="project-body">
            <h3 className="project-name">{p.name}</h3>
            <p className="project-tagline">{p.tagline}</p>
            <p className="project-description">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span className="chip mono" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-actions">
              {p.demoUrl && (
                <a className="btn btn-primary" href={p.demoUrl} target="_blank" rel="noreferrer">
                  Try it live
                </a>
              )}
              <a
                className={p.demoUrl ? "btn btn-ghost" : "btn btn-primary"}
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
