import { ArrowUpRight, BrainCircuit, ShieldCheck, Database, Rocket, Smartphone } from "lucide-react";
import { Reveal } from "../components/Reveal";

const principles = [
  {
    icon: Rocket,
    title: "Ship fast, but not recklessly",
    desc: "Speed matters, but never at the cost of someone's money or data.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence as infrastructure",
    desc: "AI is embedded in everything we build — for consumers and for developers.",
  },
  {
    icon: Database,
    title: "Own the stack",
    desc: "From PostgreSQL to the mobile app, we build and operate the critical paths ourselves.",
  },
  {
    icon: ShieldCheck,
    title: "Security is a product",
    desc: "Encryption, least privilege, auditability — treated as features, not afterthoughts.",
  },
];

const areas = [
  { icon: Smartphone, title: "Mobile & web", desc: "React Native, Expo, React — polished interfaces on a type-safe base." },
  { icon: Database, title: "Backend & data", desc: "Bun, Hono, PostgreSQL and Redis — a modular monolith built to scale." },
  { icon: BrainCircuit, title: "AI & ML", desc: "LLM orchestration, embeddings, categorization and anomaly detection." },
  { icon: ShieldCheck, title: "Infra & security", desc: "Observability, rate limiting, secrets management and hardened deploys." },
];

export function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container page-hero__inner">
          <p className="eyebrow">About RDS</p>
          <h1 className="page-hero__title">
            We build companies, not just products.
          </h1>
          <p className="page-hero__sub" style={{ color: "var(--text-muted)" }}>
            RDS (Remba Digital Services) Limited is the parent company behind
            Brayzen and Weysabi. Founded in Nigeria, we exist to make money
            understandable — for people, and for the people building software.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <div className="about-story">
                <div className="section-head" style={{ marginBottom: 12 }}>
                  <p className="eyebrow">Our story</p>
                  <h2 className="section-title">Why RDS exists.</h2>
                </div>
                <p>
                  The financial system most Africans interact with every day was
                  designed decades ago — for a different market, a different
                  pace, and a different level of transparency. We believe
                  modern technology — especially AI — can rebuild that
                  experience from the ground up.
                </p>
                <p>
                  We started with a consumer product: an AI personal finance app
                  that finally explains your money to you. That product became
                  Brayzen. Along the way, we found ourselves building serious AI
                  infrastructure — failover, structured output, guardrails — and
                  we wanted the same quality available to every engineering team.
                  That became Weysabi, open-sourced under the RDS umbrella.
                </p>
                <p>
                  Today RDS runs both: one company for people, one for builders.
                  Both ship from Lagos. Both are powered by the same conviction —
                  that financial clarity is a right, and AI is the fastest way to
                  deliver it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="principle-list">
                {principles.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <div className="principle" key={principle.title}>
                      <span className="principle__icon">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="principle__title">{principle.title}</p>
                        <p className="principle__desc">{principle.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="oss-banner">
            <div className="oss-banner__copy">
              <p className="eyebrow">Built in the open</p>
              <h2 className="section-title" style={{ fontSize: "clamp(26px, 3.5vw, 34px)" }}>
                Our infrastructure is public.
              </h2>
              <p className="oss-banner__desc">
                Beyond Weysabi, RDS publishes Envoker, Evtlog, Permcheck and
                Helm — the config, logging, API-safety and AI-orchestration
                layers we run in production. Every package is a working
                contract: we only open-source what we depend on ourselves.
              </p>
              <div style={{ marginTop: 24 }}>
                <a
                  className="btn btn--primary"
                  href="https://github.com/joinremba"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore joinremba on GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="oss-banner__packages mono">
              {["envoker", "evtlog", "permcheck", "helm", "weysabi"].map((pkg) => (
                <span className="oss-banner__pkg" key={pkg}>
                  @joinremba/{pkg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="section">
        <div className="container">
          <Reveal>
            <div className="section-head section-head--center">
              <p className="eyebrow eyebrow--center">The team</p>
              <h2 className="section-title">Small team. Deep ownership.</h2>
              <p className="section-sub">
                We keep the team deliberately small so every person owns real
                products, real infrastructure and real outcomes.
              </p>
            </div>
          </Reveal>

          <div className="team-grid" style={{ marginTop: 44 }}>
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 70}>
                  <div className="team-card">
                    <span className="team-card__icon" style={{ color: "var(--blue)", marginBottom: 10 }}>
                      <Icon size={20} />
                    </span>
                    <p className="team-card__role">Focus area</p>
                    <h3 className="team-card__title" style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700 }}>
                      {area.title}
                    </h3>
                    <p className="team-card__desc">{area.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div
              style={{
                marginTop: 48,
                padding: 36,
                borderRadius: "var(--radius-lg)",
                background: "var(--ink)",
                color: "#f5f5f7",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <h3 style={{ color: "#fff", fontSize: 26 }}>
                Want to help us build it?
              </h3>
              <p style={{ color: "#9aa1ad", maxWidth: 560, lineHeight: 1.6 }}>
                We're always open to exceptional people. Tell us what you build,
                what you care about, and where you think our mission needs you.
              </p>
              <a className="btn btn--light" href="mailto:hello@remba.money?subject=Working%20with%20RDS">
                Introduce yourself <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
