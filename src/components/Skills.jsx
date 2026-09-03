import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div className="skills-group" key={group.group}>
            <h3 className="skills-group-title">{group.group}</h3>
            <div className="skills-chips">
              {group.items.map((item) => (
                <span className="chip mono" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
