import { profile, socials } from "../data";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__copy">
          © {year} {profile.name}
          <span className="footer__dot" aria-hidden="true">·</span>
          {profile.location}
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

        <a href="#top" className="footer__totop">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
