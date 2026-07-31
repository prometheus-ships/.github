import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

const repos = [
  {
    name: "envoker",
    desc: "The safety check for your environment. Validate env vars, secrets, and config before your app even starts.",
    tag: "config",
  },
  {
    name: "evtlog",
    desc: "Production-ready logging. An event-first logging layer built on Pino with built-in PII redaction.",
    tag: "observability",
  },
  {
    name: "permcheck",
    desc: "Your API's defensive line. Request validation, structured responses, idempotency, and rate limiting in one package.",
    tag: "api safety",
  },
  {
    name: "helm",
    desc: "AI stack orchestrator for Bun — provider failover, circuit breaker, retry, and prompt template management.",
    tag: "AI infra",
  },
];

export function OpenSource() {
  return (
    <section className="oss section">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Open source</p>
            <h2 className="section-title">The stack we trust, in the open.</h2>
            <p className="section-sub">
              RDS publishes the core infrastructure behind our products on
              GitHub — so every team can build the same way we do.
            </p>
          </div>
        </Reveal>

        <div className="oss__grid">
          {repos.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 70}>
              <a
                className="oss-card"
                href={`https://github.com/joinremba/${repo.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="oss-card__head">
                  <span className="oss-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </span>
                  <span className="mono oss-card__name">{repo.name}</span>
                  <ArrowUpRight className="oss-card__arrow" size={15} />
                </div>
                <p className="oss-card__desc">{repo.desc}</p>
                <span className="oss-card__tag mono">{repo.tag}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="oss__cta">
            <span className="mono oss__cta-label">joinremba on GitHub</span>
            <a
              className="btn btn--ghost"
              href="https://github.com/joinremba"
              target="_blank"
              rel="noreferrer"
            >
              Browse the organization <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
