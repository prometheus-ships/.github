import { HeartHandshake, Terminal } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function Mission() {
  return (
    <section className="mission section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Our mission</p>
            <h2 className="section-title">
              Everyone deserves to understand their money.
            </h2>
          </div>
        </Reveal>

        <div className="mission__grid">
          <Reveal delay={100}>
            <div className="mission__copy">
              <p>
                We started RDS with a simple belief: financial clarity should be
                a right, not a privilege. The financial services most people
                rely on were built for another generation — opaque, expensive
                and slow.
              </p>
              <p>
                We work on two fronts. For people, Brayzen turns raw transaction
                data into understanding — budgets that work, subscriptions you
                can see, savings you can actually keep. For builders, Weysabi
                gives engineers the tools to ship AI products safely, reliably
                and fast.
              </p>
              <p>
                Both products ship from Lagos, Nigeria. Both are AI-native from
                the first line of code.
              </p>
            </div>
          </Reveal>

          <div className="grid">
            <Reveal delay={180}>
              <div className="pillar">
                <div className="pillar__icon pillar__icon--people">
                  <HeartHandshake size={20} />
                </div>
                <p className="pillar__title">For people</p>
                <p className="pillar__desc">
                  Consumer finance that finally speaks plain English. Brayzen is
                  the money companion everyone should have had from the start.
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="pillar">
                <div className="pillar__icon pillar__icon--builders">
                  <Terminal size={20} />
                </div>
                <p className="pillar__title">For builders</p>
                <p className="pillar__desc">
                  We open-source the infrastructure we trust in production —
                  so every team can build AI products with the same safety and
                  speed we get.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
