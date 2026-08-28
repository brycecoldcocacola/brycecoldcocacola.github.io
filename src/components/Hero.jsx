import { profile } from "../data";
import avatar from "../assets/avatar.png";
import Reveal from "./Reveal";
import "./Hero.scss";

const { firstName, lastName, role, location, headline, summary, current } = profile;

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero__grid">
        <div className="hero__intro">
          <Reveal className="hero__eyebrow" as="p">
            <span className="eyebrow">{role}</span>
            <span className="hero__eyebrow-sep" aria-hidden="true">/</span>
            <span className="hero__location">{location}</span>
          </Reveal>

          <h1 className="hero__name">
            <Reveal as="span" delay={80}>
              {firstName}{" "}
            </Reveal>
            <Reveal as="em" delay={180}>
              {lastName}
            </Reveal>
          </h1>

          <Reveal as="p" className="hero__tagline" delay={280}>
            {headline.join(" ")}
          </Reveal>

          <Reveal as="p" className="hero__summary" delay={360}>
            {summary}
          </Reveal>

          <Reveal as="div" className="hero__actions" delay={440}>
            <a href="#experience" className="btn btn--primary">
              View experience
            </a>
            <span className="hero__status">
              <span className="hero__status-dot" aria-hidden="true" />
              {current}
            </span>
          </Reveal>
        </div>

        <Reveal className="hero__portrait" delay={200}>
          <div className="hero__portrait-glow" aria-hidden="true" />
          <div className="hero__portrait-frame">
            <img src={avatar} alt="Portrait of Bryce Anglin" />
          </div>
        </Reveal>
      </div>

      <a href="#experience" className="hero__scroll" aria-label="Scroll to experience">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
