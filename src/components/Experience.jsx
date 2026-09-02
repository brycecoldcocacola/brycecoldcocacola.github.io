import { lazy, Suspense, useEffect } from "react";
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

function Role({ title, period, description }) {
  return (
    <div className="role">
      <h4 className="role__title">{title}</h4>
      <span className="role__period">{period}</span>
      {description && <p className="role__desc">{description}</p>}
    </div>
  );
}

export default function Experience() {
  // When the browser lands directly on a deep link (e.g. /#aerospace), the
  // initial hash scroll can be reset by mandatory scroll-snapping before the
  // lazy-loaded backdrops finish laying out. Re-assert the target a few times
  // over the first second, but bail out the moment the user scrolls.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;

    let cancelled = false;
    const scrollToTarget = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
    };

    const timers = [0, 250, 600, 1000].map((ms) =>
      window.setTimeout(scrollToTarget, ms),
    );
    const stop = () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);

    return () => {
      stop();
    };
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="experience__list">
        {experience.map((company, i) => (
          <Reveal
            key={company.company}
            as="section"
            id={company.id}
            className={`company ${company.theme ? `company--${company.theme}` : ""}`}
            delay={i * 60}
          >
            <div className="company__bg" aria-hidden="true">
              {company.backdrop && company.backdrop.image && (
                <img
                  className="company__media"
                  src={company.backdrop.image}
                  srcSet={company.backdrop.srcset}
                  sizes={company.backdrop.sizes || "100vw"}
                  alt=""
                  decoding="async"
                  loading="lazy"
                />
              )}
              {company.backdrop && company.backdrop.video && (
                <video
                  className="company__media"
                  poster={company.backdrop.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={company.backdrop.video} type="video/mp4" />
                </video>
              )}
            </div>
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
                  <p className="company__blurb">{company.blurb}</p>
                  {company.location && (
                    <p className="company__location">{company.location}</p>
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
    </section>
  );
}
