import { ArrowUpRight, ExternalLink, PieChart, BellRing, PiggyBank, Bot, Wallet, Link2 } from "lucide-react";
import { BrayzenMark } from "../components/Logo";
import { Reveal } from "../components/Reveal";

const features = [
  {
    icon: PieChart,
    title: "Track everything",
    desc: "Every naira accounted for, automatically. Transactions are linked, categorized and readable in plain language.",
  },
  {
    icon: BellRing,
    title: "Kill subscriptions",
    desc: "See every recurring charge, spot the ones you forgot, and cancel what you no longer use.",
  },
  {
    icon: PiggyBank,
    title: "Grow savings",
    desc: "Set goals and build savings habits that actually stick, with AI nudging you at the right moment.",
  },
  {
    icon: Bot,
    title: "Ask your money anything",
    desc: "Bunch answers questions about your finances in plain language — grounded in your real data, not generic advice.",
  },
  {
    icon: Wallet,
    title: "Budgets that work",
    desc: "Smart budgets that flex with real life instead of failing at first unexpected spend.",
  },
  {
    icon: Link2,
    title: "One connected view",
    desc: "Banking, transfers, KYC and savings are integrated through trusted partners — all in one place.",
  },
];

const integrations = [
  "Mono",
  "Anchor",
  "Dojah",
  "Cowrywise",
  "AI engine",
];

export function Brayzen() {
  return (
    <>
      <section className="page-hero page-hero--brayzen">
        <div className="container page-hero__inner">
          <div className="page-hero__brand">
            <BrayzenMark size={48} />
            <p className="page-hero__brand-name">Brayzen</p>
          </div>
          <h1 className="page-hero__title">
            Take control of your money.
          </h1>
          <p className="page-hero__sub">
            An AI-powered personal finance app for Nigerians. Track spending,
            set smart budgets, monitor subscriptions and grow your savings —
            no spreadsheets, no stress.
          </p>
          <div className="page-hero__actions">
            <a
              className="btn btn--lime"
              href="mailto:brayzenmoney@gmail.com?subject=Notify%20me%20when%20Brayzen%20launches&body=Hi%20Brayzen%20team%2C%0A%0APlease%20let%20me%20know%20when%20Brayzen%20launches.%0A%0AName%3A%20"
            >
              Notify me at launch <ArrowUpRight size={15} />
            </a>
            <a
              className="btn btn--ghost"
              href="https://brayzen.money"
              target="_blank"
              rel="noreferrer"
            >
              brayzen.money <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">What it does</p>
              <h2 className="section-title">A money companion, not another ledger.</h2>
              <p className="section-sub">
                Brayzen is built by RDS Limited, and combines bank-grade
                reliability with AI that finally makes your money make sense.
              </p>
            </div>
          </Reveal>

          <div className="product-feature-grid" style={{ marginTop: 48 }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 70}>
                  <div className="product-feature">
                    <span className="product-feature__icon product-feature__icon--lime">
                      <Icon size={20} />
                    </span>
                    <h3 className="product-feature__title">{feature.title}</h3>
                    <p className="product-feature__desc">{feature.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="integrations">
              {integrations.map((integration) => (
                <span className="chip chip--lime" key={integration}>
                  {integration}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
