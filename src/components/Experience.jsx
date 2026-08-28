import { lazy, Suspense } from "react";
import { experience } from "../data";
import Reveal from "./Reveal";
import "./Experience.scss";

// The Three.js globe is heavy (~500 kB) and decorative — load it on demand.
const SatelliteOrbit = lazy(() => import("./SatelliteOrbit"));

function TagRow({ tags }) {
  return (
    <ul className="tag-row">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Role({ title, period, meta, description }) {
  return (
    <div className="role">
      <div className="role__top">
        <h4 className="role__title">{title}</h4>
        <span className="role__period">{period}</span>
      </div>
      {meta && <p className="role__meta">{meta}</p>}
      {description && <p className="role__desc">{description}</p>}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="shell">
        <Reveal className="section-label">
          <span className="eyebrow">01</span>
          <span className="section-label-text">Experience</span>
        </Reveal>

        <div className="experience__list">
          {experience.map((company, i) => (
            <Reveal
              key={company.company}
              className={`company ${company.theme ? `company--${company.theme}` : ""}`}
              delay={i * 60}
            >
              <div className="company__bg" aria-hidden="true" />
              <div className="company__content">
                <div className="company__head">
                  <div className="company__id">
                    <h3 className="company__name">
                      {company.url ? (
                        <a href={company.url} target="_blank" rel="noreferrer noopener">
                          {company.company}
                        </a>
                      ) : (
                        company.company
                      )}
                    </h3>
                    {company.blurb && (
                      <p className="company__blurb">{company.blurb}</p>
                    )}
                  </div>
                </div>

                <div className="company__body">
                  <div className="company__roles">
                    {company.roles.map((role) => (
                      <Role key={role.title} {...role} />
                    ))}
                    {company.skills && <TagRow tags={company.skills} />}
                  </div>
                </div>
              </div>

              {company.orbit && (
                <div className="company__orbit">
                  <Suspense fallback={null}>
                    <SatelliteOrbit />
                  </Suspense>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
