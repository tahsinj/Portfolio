const highlights = [
  { label: "NOW", text: "Master of Quantitative Finance at the University of Waterloo" },
  { label: "GRADUATED", text: "BSc Computer Science, UBC: 96.7% average, Dean's Scholar" },
  { label: "THESIS", text: "First-author manuscript on turning plain-English questions into MongoDB queries" },
  { label: "RESEARCH", text: "Crypto statistical arbitrage, backtested on survivorship-free data" },
  { label: "SCHOLARSHIPS", text: "$110K awarded at UBC" },
  { label: "OLYMPIAD", text: "Gold medal, ranked 1st in the UAE" },
];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-label mono">HIGHLIGHTS</div>
      <div className="ticker-window">
        <ul className="ticker-track" style={{ margin: 0, listStyle: "none" }}>
          {[...highlights, ...highlights].map((item, i) => (
            <li key={i} className="ticker-item" aria-hidden={i >= highlights.length}>
              <span className="mono">{item.label}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
