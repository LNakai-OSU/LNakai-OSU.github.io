import { LINKS } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow mono">CS student - data science &amp; databases</p>
      <h1 className="hero-name">Lannin Nakai</h1>
      <p className="hero-sub">
        I like turning messy real-world data into schemas, pipelines, and interfaces people can
        actually trust - from the database up.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View project
        </a>
        <a className="btn btn-ghost" href={LINKS.resume} target="_blank" rel="noreferrer">
          Download resume
        </a>
      </div>
      <div className="hero-links mono">
        <a href={LINKS.github} target="_blank" rel="noreferrer">
          github.com/LNakai-OSU
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
          linkedin.com/in/lannin-nakai
        </a>
        <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
      </div>
    </section>
  );
}
