import { LINKS } from "../data";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Let's talk</h2>
      <p className="contact-sub">
        Open to database, data-science, and software engineering roles - reach out any time.
      </p>
      <a className="btn btn-primary btn-large" href={`mailto:${LINKS.email}`}>
        {LINKS.email}
      </a>
      <div className="contact-links mono">
        <a href={LINKS.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={LINKS.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </section>
  );
}
