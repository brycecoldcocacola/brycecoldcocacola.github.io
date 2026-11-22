import { profile, experience, education } from "../data";
import Reveal from "./Reveal";
import "./Hero.scss";

const { firstName, lastName, location, greeting, summary } = profile;

// "Mar 2026 — Present" → { start: 2026, end: "Present" }
const yearsOf = (period) => {
  const [start, end] = period.split("—").map((s) => s.trim());
  const year = (s) => (/\d{4}/.exec(s) || [s])[0];
  return { start: year(start), end: /present/i.test(end) ? "Now" : year(end) };
};

// One row per company, spanning its earliest → latest role.
const career = experience.map((c) => {
  const newest = yearsOf(c.roles[0].period);
  const oldest = yearsOf(c.roles[c.roles.length - 1].period);
  return {
    id: c.id,
    company: c.company,
    title: c.roles[0].title,
    span: `${oldest.start} — ${newest.end}`,
    current: newest.end === "Now",
  };
});

const current = career[0];
const firstYear = Math.min(...career.map((c) => Number(c.span.slice(0, 4))));
const yearsExp = new Date().getFullYear() - firstYear;
const roleCount = experience.reduce((n, c) => n + c.roles.length, 0);

export default function Hero() {
  return (
    <section id="top" className="hero">
      <HeroOrbits />

      <div className="shell shell-wide hero__grid">
        <div className="hero__intro">
          <Reveal as="p" className="hero__eyebrow">
            <span className="eyebrow">{greeting}</span>
          </Reveal>

          <h1 className="hero__name">
            <Reveal as="span" delay={80}>
              {firstName}
            </Reveal>{" "}
            <Reveal as="em" delay={180}>
              {lastName}
            </Reveal>
          </h1>

          <Reveal as="p" className="hero__now" delay={240}>
            {current.current && <span className="hero__pulse" aria-hidden="true" />}
            <span>
              {current.title}
              <span className="hero__at"> at </span>
              <a href={`#${current.id}`}>{current.company}</a>
            </span>
          </Reveal>

          <Reveal as="p" className="hero__summary" delay={300}>
            {summary}
          </Reveal>

          <Reveal as="div" className="hero__actions" delay={380}>
            <a href="#experience" className="btn btn--primary">
              View experience
              <span aria-hidden="true">↓</span>
            </a>
            <span className="hero__location">{location}</span>
          </Reveal>
        </div>

        <Reveal as="aside" className="hero__index" delay={420} aria-label="Career index">
          <div className="hero__index-head">
            <span className="eyebrow">Career</span>
            <span className="hero__index-meta">{yearsExp}+ yrs</span>
          </div>

          <ol className="hero__index-list">
            {career.map((c, i) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="hero__index-row">
                  <span className="hero__index-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="hero__index-co">
                    {c.company}
                    <span className="hero__index-role">{c.title}</span>
                  </span>
                  <span className="hero__index-span">{c.span}</span>
                </a>
              </li>
            ))}
          </ol>

          <dl className="hero__stats">
            <div>
              <dt>Years</dt>
              <dd>{yearsExp}+</dd>
            </div>
            <div>
              <dt>Roles</dt>
              <dd>{roleCount}</dd>
            </div>
            <div>
              <dt>Degree</dt>
              <dd>{education[0].degree.split(" ")[0]}</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <a href="#experience" className="hero__scroll" aria-label="Scroll to experience">
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}

const ORBITS = [
  { rx: 360, ry: 120, tilt: -18, dur: "38s", sat: 3.5 },
  { rx: 470, ry: 190, tilt: -8 },
  { rx: 610, ry: 260, tilt: -24, dur: "64s", sat: 2.5 },
];

// Decorative orbital ellipses behind the hero — a quiet nod to the satellite
// work further down the page.
function HeroOrbits() {
  return (
    <svg
      className="hero__orbits"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hero-planet" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="rgba(232,179,107,0.16)" />
          <stop offset="60%" stopColor="rgba(232,179,107,0.03)" />
          <stop offset="100%" stopColor="rgba(232,179,107,0)" />
        </radialGradient>
      </defs>
      <g transform="translate(760 470)">
        <circle r="150" fill="url(#hero-planet)" />
        {ORBITS.map((o) => (
          <g key={o.rx} transform={`rotate(${o.tilt})`}>
            <ellipse className="hero__orbit-ring" rx={o.rx} ry={o.ry} />
            {o.dur && (
              <circle className="hero__orbit-sat" r={o.sat}>
                <animateMotion
                  dur={o.dur}
                  repeatCount="indefinite"
                  path={`M ${-o.rx} 0 A ${o.rx} ${o.ry} 0 1 0 ${o.rx} 0 A ${o.rx} ${o.ry} 0 1 0 ${-o.rx} 0`}
                />
              </circle>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}
