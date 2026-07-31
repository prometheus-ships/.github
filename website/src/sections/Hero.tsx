import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { HeroVisual } from "../components/HeroVisual";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="container">
        <div className="hero__grid">
          <div className="hero__inner">
            <Reveal>
              <span className="hero__badge">
                <span className="hero__badge-dot" aria-hidden="true" />
                RDS Limited &middot; Remba Digital Services
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero__title">
                The parent company behind Africa's{" "}
                <span className="hero__title-accent">AI-native money stack.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero__sub">
                RDS (Remba Digital Services) Limited builds companies at the
                intersection of finance and AI. Today that means two products:
                Brayzen, an AI personal finance app for Nigerians, and Weysabi,
                an AI orchestration stack for full-stack developers.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#products">
                  Explore our products <ArrowDown size={15} />
                </a>
                <Link className="btn btn--ghost" to="/about">
                  Our story <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="hero__meta">
                <span className="chip chip--light">
                  <MapPin size={13} /> Lagos, Nigeria
                </span>
                <span className="chip chip--light">Consumer + Developer</span>
                <span className="chip chip--light">AI-native from day one</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
