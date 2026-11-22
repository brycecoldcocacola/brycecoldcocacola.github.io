import { useState } from "react";
import { profile, socials } from "./data";
import { chapters, current, FIRST_YEAR } from "./chapters";
import Timeline from "./components/Timeline";
import ChapterDialog from "./components/ChapterDialog";
import "./App.scss";

const [firstName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");
const currentIndex = chapters.indexOf(current);

export default function App() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="ambient" aria-hidden="true" />

      <div className="page">
        <header className="intro">
          <div className="intro__id">
            <h1 className="intro__name">
              {firstName} <em>{lastName}</em>
            </h1>
            <p className="intro__now">
              <span className="intro__live" aria-hidden="true" />
              <span>
                {current.title}
                <span className="intro__at"> at </span>
                <button type="button" onClick={() => setOpen(currentIndex)}>
                  {current.org}
                </button>
              </span>
            </p>
          </div>

          <div className="intro__about">
            <p className="intro__summary">{profile.summary}</p>
            <div className="intro__actions">
              <button type="button" className="btn btn--primary" onClick={() => setOpen(0)}>
                Start from {FIRST_YEAR}
                <span aria-hidden="true">→</span>
              </button>
              <span className="intro__hint">or pick any chapter below</span>
            </div>
          </div>
        </header>

        <main className="page__timeline">
          <Timeline activeIndex={open} onOpen={setOpen} />
        </main>

        <footer className="page__foot">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          {socials.length > 0 && (
            <ul className="page__socials">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </footer>
      </div>

      <ChapterDialog index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
    </>
  );
}
