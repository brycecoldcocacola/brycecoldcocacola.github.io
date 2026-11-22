import { useEffect, useRef, useState } from "react";
import { chapters } from "../chapters";
import "./ChapterDialog.scss";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

function Media({ media }) {
  const [reduced] = useState(prefersReducedMotion);
  if (!media) return null;

  if (media.video && !reduced) {
    return (
      <video
        key={media.video}
        className="chapter__media"
        src={media.video}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  const src = media.image || media.poster;
  return src ? <img className="chapter__media" src={src} alt="" decoding="async" /> : null;
}

// Modal "chapter" card. `index` is the open chapter, or null when closed.
export default function ChapterDialog({ index, onClose, onNavigate }) {
  const ref = useRef(null);
  const bodyRef = useRef(null);
  const chapter = index == null ? null : chapters[index];

  // Sync the native <dialog> with `index`.
  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (chapter && !dlg.open) dlg.showModal();
    if (!chapter && dlg.open) dlg.close();
  }, [chapter]);

  // Start each chapter scrolled to the top.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [index]);

  const go = (delta) => {
    const next = index + delta;
    if (next >= 0 && next < chapters.length) onNavigate(next);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  // Clicking the backdrop (the dialog element itself) closes it.
  const onClick = (e) => {
    if (e.target === ref.current) ref.current.close();
  };

  const prev = index > 0 ? chapters[index - 1] : null;
  const next = index != null && index < chapters.length - 1 ? chapters[index + 1] : null;

  return (
    <dialog
      ref={ref}
      className="chapter"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={onClick}
      aria-labelledby="chapter-title"
    >
      {chapter && (
        <article className={`chapter__card chapter__card--${chapter.kind}`}>
          <button
            type="button"
            className="chapter__close"
            onClick={() => ref.current.close()}
            aria-label="Close"
          >
            ×
          </button>

          {chapter.media && (
            <div className="chapter__visual">
              <Media media={chapter.media} />
            </div>
          )}

          <div className="chapter__body" ref={bodyRef}>
            <p className="chapter__meta">
              <span>
                Chapter {index + 1} of {chapters.length}
              </span>
              <span aria-hidden="true">·</span>
              <span className="chapter__period">{chapter.period}</span>
            </p>

            <h2 className="chapter__org" id="chapter-title">
              {chapter.url ? (
                <a href={chapter.url} target="_blank" rel="noopener noreferrer">
                  {chapter.org}
                  <span className="chapter__ext" aria-hidden="true">↗</span>
                </a>
              ) : (
                chapter.org
              )}
            </h2>
            <p className="chapter__title">
              {chapter.current && <span className="chapter__live" aria-hidden="true" />}
              {chapter.title}
            </p>

            <p className="chapter__desc">{chapter.description}</p>

            <dl className="chapter__facts">
              {chapter.blurb && (
                <div>
                  <dt>{chapter.kind === "work" ? "Company" : "School"}</dt>
                  <dd>{chapter.blurb}</dd>
                </div>
              )}
              {chapter.location && (
                <div>
                  <dt>Location</dt>
                  <dd>{chapter.location}</dd>
                </div>
              )}
            </dl>

            {chapter.skills && (
              <ul className="tag-row" aria-label="Skills">
                {chapter.skills.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav className="chapter__nav" aria-label="Chapters">
            <button type="button" onClick={() => go(-1)} disabled={!prev} className="chapter__step">
              <span className="chapter__step-dir">← {prev ? prev.short : "Previous"}</span>
              <span className="chapter__step-name">{prev ? prev.title : "The beginning"}</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={!next}
              className="chapter__step chapter__step--next"
            >
              <span className="chapter__step-dir">{next ? next.short : "Next"} →</span>
              <span className="chapter__step-name">{next ? next.title : "Today"}</span>
            </button>
          </nav>
        </article>
      )}
    </dialog>
  );
}
