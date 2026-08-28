import { profile, socials } from "../data";
import Reveal from "./Reveal";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <Reveal className="footer__lead">
          <span className="eyebrow">Contact</span>
          <h2 className="footer__cta">
            Let&rsquo;s build something <em>great.</em>
          </h2>
          <p className="footer__sub">
            {profile.current} — {profile.location}.
          </p>

          {socials.length > 0 && (
            <ul className="footer__socials">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {profile.name}
          </p>
          <a href="#top" className="footer__totop">
            Back to top
            <span aria-hidden="true"> ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
