import { chapters, companies, NOW, FIRST_YEAR } from "../chapters";
import "./Timeline.scss";

const START = FIRST_YEAR;
const END = NOW + 0.4; // a little room after the "now" marker
const pos = (y) => ((y - START) / (END - START)) * 100;
const span = (a, b, gap = 0) => ({
  left: `${pos(a)}%`,
  width: `calc(${pos(b) - pos(a)}% - ${gap}px)`,
});

const years = [];
for (let y = START; y <= Math.floor(NOW); y += 1) years.push(y);

const yearRange = (c) =>
  `${Math.floor(c.start)} – ${c.current ? "now" : Math.floor(c.end)}`;

function Segment({ chapter, index, active, onOpen }) {
  const wide = pos(chapter.end) - pos(chapter.start) > 7;
  return (
    <button
      type="button"
      className={`tl-seg tl-seg--${chapter.kind} ${chapter.current ? "is-current" : ""} ${
        active ? "is-active" : ""
      }`}
      style={span(chapter.start, chapter.end, 4)}
      onClick={() => onOpen(index)}
      aria-label={`${chapter.org}, ${chapter.title}, ${yearRange(chapter)}`}
    >
      {wide && <span className="tl-seg__title">{chapter.title}</span>}
      <span className="tl-seg__tip" aria-hidden="true">
        <strong>{chapter.title}</strong>
        <span>
          {chapter.short} · {yearRange(chapter)}
        </span>
      </span>
    </button>
  );
}

export default function Timeline({ activeIndex, onOpen }) {
  const indexed = chapters.map((c, i) => ({ c, i }));
  const work = indexed.filter(({ c }) => c.kind === "work");
  const edu = indexed.filter(({ c }) => c.kind === "edu");

  return (
    <section className="tl" aria-label="Career timeline">
      {/* ── Horizontal timeline (desktop) ───────────────── */}
      <div className="tl-h">
        <div className="tl-h__lane tl-h__lane--orgs" aria-hidden="true">
          {companies.map((co) => (
            <span key={co.id} className="tl-org" style={span(co.start, co.end)}>
              <span className="tl-org__name">{co.name}</span>
            </span>
          ))}
        </div>

        <div className="tl-h__row">
          <span className="tl-h__label">Work</span>
          <div className="tl-h__lane tl-h__lane--work">
            {work.map(({ c, i }) => (
              <Segment key={c.key} chapter={c} index={i} active={i === activeIndex} onOpen={onOpen} />
            ))}
          </div>
        </div>

        <div className="tl-h__row">
          <span className="tl-h__label">School</span>
          <div className="tl-h__lane tl-h__lane--edu">
            {edu.map(({ c, i }) => (
              <Segment key={c.key} chapter={c} index={i} active={i === activeIndex} onOpen={onOpen} />
            ))}
          </div>
        </div>

        <div className="tl-h__axis" aria-hidden="true">
          {years.map((y) => (
            <span key={y} className="tl-tick" style={{ left: `${pos(y)}%` }}>
              <span className="tl-tick__label">{y}</span>
            </span>
          ))}
          <span className="tl-now" style={{ left: `${pos(NOW)}%` }}>
            <span className="tl-now__dot" />
            <span className="tl-now__label">Now</span>
          </span>
        </div>
      </div>

      {/* ── Vertical list (narrow / short screens) ──────── */}
      <ol className="tl-v">
        {indexed.map(({ c, i }) => (
          <li key={c.key}>
            <button
              type="button"
              className={`tl-v__item tl-v__item--${c.kind} ${c.current ? "is-current" : ""}`}
              onClick={() => onOpen(i)}
            >
              <span className="tl-v__years">{yearRange(c)}</span>
              <span className="tl-v__org">{c.short}</span>
              <span className="tl-v__title">{c.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
