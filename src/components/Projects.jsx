import { useState } from "react";
import { PROJECTS } from "../data";

function ProjectGallery({ name, images, githubUrl }) {
  const [active, setActive] = useState(0);

  return (
    <div className="project-gallery">
      <a className="project-image" href={githubUrl} target="_blank" rel="noreferrer">
        <img src={images[active]} alt={`Screenshot of ${name}`} loading="lazy" />
      </a>
      {images.length > 1 && (
        <div className="project-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`project-thumb${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1} of ${name}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      {PROJECTS.map((p) => (
        <article className="project-card" key={p.name}>
          <ProjectGallery name={p.name} images={p.images} githubUrl={p.githubUrl} />
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
