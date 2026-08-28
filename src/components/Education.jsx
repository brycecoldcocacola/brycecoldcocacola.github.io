import { education } from "../data";
import Reveal from "./Reveal";
import "./Education.scss";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="shell">
        <Reveal className="section-label">
          <span className="eyebrow">02</span>
          <span className="section-label-text">Education</span>
        </Reveal>

        <div className="education__list">
          {education.map((item, i) => (
            <Reveal key={item.school} className="edu" delay={i * 90}>
              <div className="edu__id">
                <h3 className="edu__name">{item.school}</h3>
                <p className="edu__degree">{item.degree}</p>
                {item.focus && <p className="edu__focus">{item.focus}</p>}
              </div>
              <span className="edu__period">{item.period}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
