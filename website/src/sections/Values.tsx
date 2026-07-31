import { Reveal } from "../components/Reveal";

const values = [
  {
    num: "01",
    title: "AI-native, not AI-washed",
    desc: "AI is the product, not the marketing. Every feature starts from what intelligence can actually do for the user.",
  },
  {
    num: "02",
    title: "Security before speed",
    desc: "We handle money and data. Anything that can't pass a security review doesn't ship — no exceptions.",
  },
  {
    num: "03",
    title: "Own the whole stack",
    desc: "From database to interface, we build the parts that matter. That's how we keep products fast, cheap and reliable.",
  },
  {
    num: "04",
    title: "Build in public",
    desc: "We open-source our core infrastructure and share what we learn. Good work compounds when it's visible.",
  },
  {
    num: "05",
    title: "Long-term over hype",
    desc: "We optimize for products that still make sense in ten years, not for what's trendy this quarter.",
  },
  {
    num: "06",
    title: "Boring reliability",
    desc: "The most valuable feature is the one that never breaks. We invest heavily in things users never see.",
  },
];

export function Values() {
  return (
    <section className="values section">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">What we believe</p>
            <h2 className="section-title">The principles behind every product.</h2>
          </div>
        </Reveal>

        <div className="values__grid">
          {values.map((value, index) => (
            <Reveal key={value.num} delay={index * 70}>
              <div className="value-card">
                <span className="value-card__num">{value.num}</span>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
