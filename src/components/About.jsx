import { EDUCATION } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <p className="about-bio">
          Born and raised in Hawaiʻi, I started my computer science education at the University of
          Oregon, double-majoring in Computer Information Sciences and Physics, and I'm now
          continuing it at Oregon State University. I'm most interested in solving problems with
          data science and figuring out the right way to structure and store the data underneath
          it - schema design, query performance, and the pipelines that turn raw data into
          something people can actually use.
        </p>
        <ul className="about-facts">
          {EDUCATION.map((ed) => (
            <li key={ed.school}>
              <span className="about-fact-period mono">{ed.period}</span>
              <span className="about-fact-school">{ed.school}</span>
              <span className="about-fact-detail">{ed.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
