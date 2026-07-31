import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { RdsMark, GithubIcon } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/brayzen", label: "Brayzen" },
  { to: "/weysabi", label: "Weysabi" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <RdsMark size={34} />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">RDS</span>
            <span className="navbar__brand-sub">Remba Digital Services</span>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__cta-row">
          <a
            className="navbar__ghost-icon"
            href="https://github.com/joinremba"
            target="_blank"
            rel="noreferrer"
            aria-label="joinremba on GitHub"
            title="joinremba on GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a className="navbar__cta btn btn--primary btn--sm" href="mailto:hello@remba.money">
            Contact us <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="navbar__hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="btn btn--primary"
            href="mailto:hello@remba.money"
            onClick={() => setOpen(false)}
          >
            Contact us <ArrowUpRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
