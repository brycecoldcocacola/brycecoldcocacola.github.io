import { useEffect, useState } from "react";
import { profile } from "../data";
import "./Nav.scss";

const LINKS = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      const line = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= line) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="shell shell-wide nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-name">{profile.name}</span>
          <span className="nav__brand-dot" aria-hidden="true" />
        </a>

        <nav className="nav__links" aria-label="Sections">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${active === link.id ? "is-active" : ""}`}
            >
              <span className="nav__link-num">{String(LINKS.indexOf(link) + 1).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <span
        className="nav__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
