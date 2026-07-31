import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { BrayzenMark, WeysabiMark } from "../components/Logo";
import { Reveal } from "../components/Reveal";

const brayzenFeatures = [
  "Smart budgets",
  "Subscription tracking",
  "AI insights",
  "Savings goals",
];

const weysabiFeatures = [
  "Provider failover",
  "Structured output",
  "Streaming",
  "RAG",
  "Guardrails",
];

export function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Our companies</p>
            <h2 className="section-title">Two products, one mission.</h2>
            <p className="section-sub">
              Every product we ship is built in-house, in Lagos — from the
              mobile app down to the infrastructure that powers it.
            </p>
          </div>
        </Reveal>

        <div className="products__cards">
          <Reveal>
            <article className="product-card product-card--brayzen">
              <div className="product-card__head">
                <div className="product-card__brand">
                  <BrayzenMark size={44} />
                  <p className="product-card__name">Brayzen</p>
                </div>
                <span className="product-card__type product-card__type--brayzen">
                  Consumer finance
                </span>
              </div>

              <p className="product-card__desc">
                An AI personal finance app for Nigerians. Track spending, set
                smart budgets, monitor subscriptions and grow savings — with AI
                that understands your money.
              </p>

              <div className="product-card__chips">
                {brayzenFeatures.map((feature) => (
                  <span className="chip chip--lime" key={feature}>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="product-card__links">
                <Link className="product-card__link" to="/brayzen">
                  Product page <ArrowUpRight size={14} />
                </Link>
                <a
                  className="product-card__link"
                  href="https://brayzen.money"
                  target="_blank"
                  rel="noreferrer"
                >
                  brayzen.money <ExternalLink size={13} />
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="product-card product-card--weysabi">
              <div className="product-card__head">
                <div className="product-card__brand">
                  <WeysabiMark size={44} />
                  <p className="product-card__name">Weysabi</p>
                </div>
                <span className="product-card__type product-card__type--weysabi">
                  Developer AI
                </span>
              </div>

              <p className="product-card__desc">
                AI orchestration for full-stack developers. Provider failover,
                structured output, streaming, RAG and guardrails in one
                dependency — your keys, your providers.
              </p>

              <div className="product-card__chips">
                {weysabiFeatures.map((feature) => (
                  <span className="chip chip--emerald" key={feature}>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="product-card__links">
                <Link className="product-card__link" to="/weysabi">
                  Product page <ArrowUpRight size={14} />
                </Link>
                <a
                  className="product-card__link"
                  href="https://github.com/joinremba/weysabi"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <ExternalLink size={13} />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
