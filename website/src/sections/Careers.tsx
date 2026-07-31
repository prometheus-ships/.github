import { ArrowUpRight, Flame, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";

const benefits = [
  {
    icon: Sparkles,
    title: "Ship AI products from Lagos",
    desc: "Work on finance and AI at the same time — the two most interesting problems in the market.",
  },
  {
    icon: GitBranch,
    title: "Small team, real ownership",
    desc: "No layers of process. You own what you build, end to end, and users see it quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Production-grade standards",
    desc: "We care about the boring parts — security, reliability, observability — as much as the fun parts.",
  },
  {
    icon: Flame,
    title: "Build in public",
    desc: "Your work becomes open source that other engineers across Africa use and learn from.",
  },
];

export function Careers() {
  return (
    <section id="careers" className="careers section--tight">
      <div className="container">
        <div className="careers__inner">
          <div>
            <Reveal>
              <div className="section-head">
                <p className="eyebrow">Careers</p>
                <h2 className="section-title">Join the team building the future of money.</h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="careers__list">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div className="careers__item" key={benefit.title}>
                      <span className="careers__item-icon">
                        <Icon size={17} />
                      </span>
                      <div>
                        <p style={{ fontWeight: 700 }}>{benefit.title}</p>
                        <p className="text-muted" style={{ fontSize: 13.5 }}>
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="careers__cta">
              <p className="mono" style={{ fontSize: 12, color: "#9aa1ad", letterSpacing: "0.1em" }}>
                Open to working with us
              </p>
              <h3 className="careers__cta-title">
                We're always looking for exceptional engineers, designers and operators.
              </h3>
              <p className="careers__cta-sub">
                No formal listings right now — if our mission resonates, introduce
                yourself. Include the project you'd most like to work on.
              </p>
              <div>
                <a className="btn btn--light" href="mailto:hello@remba.money">
                  Introduce yourself <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
