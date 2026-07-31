import { Mail } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { GithubIcon } from "../components/Logo";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="contact__inner">
            <p className="contact__eyebrow">Get in touch</p>
            <h2 className="contact__title">
              Let's build the future of money — together.
            </h2>
            <p className="contact__sub">
              Whether you're a future Brayzen user, a Weysabi contributor, or a
              partner — we'd love to hear from you.
            </p>
            <div className="contact__actions">
              <a className="btn btn--light" href="mailto:hello@remba.money">
                <Mail size={15} /> Email us
              </a>
              <a
                className="btn btn--primary"
                href="https://github.com/joinremba"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={15} /> Follow our work
              </a>
            </div>
            <p className="mono" style={{ fontSize: 12, color: "#9aa1ad" }}>
              hello@remba.money
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
