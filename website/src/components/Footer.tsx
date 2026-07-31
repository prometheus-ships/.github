import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { RdsMark, BrayzenMark, WeysabiMark, GithubIcon } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <RdsMark size={40} />
              <div className="footer__brand-text">
                <p className="footer__brand-name">RDS Limited</p>
                <p className="footer__brand-sub">Remba Digital Services</p>
              </div>
            </div>
            <p className="footer__desc">
              The parent company behind Brayzen and Weysabi. Building the future
              of consumer finance in Africa, powered by AI.
            </p>
            <p className="footer__made">
              <MapPin size={13} /> Made in Lagos, Nigeria
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Products</p>
            <a className="footer__link" href="https://brayzen.money" target="_blank" rel="noreferrer">
              <BrayzenMark size={18} /> Brayzen <ArrowUpRight size={13} />
            </a>
            <a className="footer__link" href="https://github.com/joinremba/weysabi" target="_blank" rel="noreferrer">
              <WeysabiMark size={18} /> Weysabi <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Company</p>
            <Link className="footer__link" to="/about">About</Link>
            <Link className="footer__link" to="/about#careers">Careers</Link>
            <Link className="footer__link" to="/">Home</Link>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Contact</p>
            <a className="footer__link" href="mailto:hello@remba.money">
              <Mail size={14} /> hello@remba.money
            </a>
            <a className="footer__link" href="https://github.com/joinremba" target="_blank" rel="noreferrer">
              <GithubIcon size={14} /> github.com/joinremba
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} RDS (Remba Digital Services) Limited. All rights reserved.
            Registered in Nigeria.
          </p>
          <p className="footer__tagline mono">Know your money. Build your stack.</p>
        </div>
      </div>
    </footer>
  );
}
