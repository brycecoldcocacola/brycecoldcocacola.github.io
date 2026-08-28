import { skillGroups } from "../data";
import Reveal from "./Reveal";
import "./Skills.scss";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <Reveal className="section-label">
          <span className="eyebrow">03</span>
          <span className="section-label-text">Toolkit</span>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} className="skill-group" delay={i * 80}>
              <h3 className="skill-group__label">{group.label}</h3>
              <ul className="tag-row">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
