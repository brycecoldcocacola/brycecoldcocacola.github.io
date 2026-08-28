import { profile } from "../data";
import Reveal from "./Reveal";
import "./Hero.scss";

const { firstName, lastName, role, location, greeting, summary } = profile;

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero__grid">
        <div className="hero__intro">
          <Reveal className="hero__eyebrow" as="p">
            <span className="eyebrow">{greeting}</span>
          </Reveal>

          <h1 className="hero__name">
            <Reveal as="span" delay={80}>
              {firstName}{" "}
            </Reveal>
            <Reveal as="em" delay={180}>
              {lastName}
            </Reveal>
          </h1>

          <Reveal as="p" className="hero__subtitle" delay={240}>
            <span className="hero__location">{role}</span>
            <span className="hero__eyebrow-sep" aria-hidden="true">/</span>
            <span className="hero__location">{location}</span>
          </Reveal>

          <Reveal as="p" className="hero__summary" delay={300}>
            {summary}
          </Reveal>

          <Reveal as="div" className="hero__actions" delay={380}>
            <a href="#experience" className="btn btn--primary">
              View experience
            </a>
          </Reveal>
        </div>
      </div>

      <a href="#experience" className="hero__scroll" aria-label="Scroll to experience">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
