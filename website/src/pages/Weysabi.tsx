import { ArrowUpRight, Check, ExternalLink, Package, Layers, Shield, KeyRound, WifiOff } from "lucide-react";
import { WeysabiMark } from "../components/Logo";
import { Reveal } from "../components/Reveal";

const reasons = [
  {
    icon: KeyRound,
    title: "Your keys, your providers",
    desc: "No markup, no gateway, no middleman. Bring your own API keys and keep your data in your stack.",
  },
  {
    icon: Package,
    title: "One dependency",
    desc: "Not LangChain plus provider SDKs. Just weysabi — typed, predictable and small.",
  },
  {
    icon: Shield,
    title: "Safe by default",
    desc: "Retries, circuit breakers, fallbacks, guardrails and PII redaction built in from the start.",
  },
  {
    icon: WifiOff,
    title: "Works offline-first",
    desc: "Cloud features like evals and monitoring are optional. Stop paying and the library still works.",
  },
  {
    icon: Layers,
    title: "RAG included",
    desc: "Zero-config retrieval for your own documents, local or cloud — no separate pipeline to maintain.",
  },
  {
    icon: Check,
    title: "Zero lock-in",
    desc: "Plain TypeScript, standard interfaces, open source. Move providers or self-host anytime.",
  },
];

const capabilities = [
  "Provider failover",
  "Structured output",
  "Streaming",
  "RAG",
  "Guardrails",
  "Prompt management",
];

export function Weysabi() {
  return (
    <>
      <section className="page-hero page-hero--weysabi">
        <div className="container page-hero__inner">
          <div className="page-hero__brand">
            <WeysabiMark size={44} />
            <p className="page-hero__brand-name">Weysabi</p>
          </div>
          <h1 className="page-hero__title">
            Production AI infrastructure, inside your stack.
          </h1>
          <p className="page-hero__sub">
            AI orchestration for full-stack developers. Run models across
            providers with retries, failover, typed prompts, guardrails,
            streaming and local RAG — one dependency, zero token markup.
          </p>
          <div className="page-hero__actions">
            <a
              className="btn btn--light"
              href="https://github.com/joinremba/weysabi"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <ExternalLink size={14} />
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.npmjs.com/package/weysabi"
              target="_blank"
              rel="noreferrer"
            >
              weysabi on npm <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Why Weysabi</p>
              <h2 className="section-title">Built by RDS for its own production systems.</h2>
              <p className="section-sub">
                Weysabi powers AI features across our products. We open-sourced
                it because every team deserves the same reliability we depend on.
              </p>
            </div>
          </Reveal>

          <div className="product-feature-grid" style={{ marginTop: 48 }}>
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={index * 70}>
                  <div className="product-feature">
                    <span className="product-feature__icon product-feature__icon--emerald">
                      <Icon size={20} />
                    </span>
                    <h3 className="product-feature__title">{reason.title}</h3>
                    <p className="product-feature__desc">{reason.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <div className="section-head" style={{ marginBottom: 20 }}>
                  <p className="eyebrow">The shape of the API</p>
                  <h2 className="section-title" style={{ fontSize: "clamp(26px, 3.5vw, 34px)" }}>
                    No markup. Just code.
                  </h2>
                </div>
                <div className="capability-grid">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 14.5,
                        fontWeight: 500,
                      }}
                    >
                      <Check size={16} color="var(--emerald)" />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <pre className="code-block">
                <code>
                  <span className="tok-k">import</span> {"{ createWeysabi }"} <span className="tok-k">from</span> <span className="tok-s">"weysabi"</span>;
                  {"\n\n"}
                  <span className="tok-k">const</span> weysabi = createWeysabi({"\u007b"}
                  {"\n"}  groq: {"{ apiKey: process.env.GROQ_API_KEY }"},
                  {"\n"}  openai: {"{ apiKey: process.env.OPENAI_API_KEY }"},
                  {"\n"}{"\u007d"});
                  {"\n\n"}
                  <span className="tok-k">const</span> result = <span className="tok-k">await</span> weysabi.complete({"\u007b"}
                  {"\n"}  model: <span className="tok-s">"groq/llama-4-scout"</span>,
                  {"\n"}  prompt: <span className="tok-s">"translate"</span>,
                  {"\n"}  inputs: {"{ text: "}<span className="tok-s">"Hello"</span>, language: <span className="tok-s">"French"</span> {"}"},
                  {"\n"}  fallbacks: [<span className="tok-s">"openai/gpt-4o-mini"</span>],
                  {"\n"}{"\u007d"});
                  {"\n\n"}
                  console.log(result.content); <span className="tok-c">// "Bonjour"</span>
                </code>
              </pre>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
