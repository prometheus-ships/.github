const stats = [
  { value: "2", label: "Product companies" },
  { value: "2", label: "Open-source core" },
  { value: "100%", label: "Built in Nigeria" },
  { value: "AI", label: "At the centre" },
];

export function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <p className="stat__value">{stat.value}</p>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
