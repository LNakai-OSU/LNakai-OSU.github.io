import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {EXPERIENCE.map((job) => (
          <li className="timeline-item" key={job.org}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-period mono">{job.period}</p>
              <h3 className="timeline-role">
                {job.role} <span className="timeline-org">- {job.org}</span>
              </h3>
              <p className="timeline-location">{job.location}</p>
              <ul className="timeline-points">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
