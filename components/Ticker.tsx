const highlights = [
  { label: "NOW", text: "Master of Quantitative Finance, University of Waterloo" },
  { label: "GRADUATED", text: "UBC Computer Science with a 96.7% average" },
  { label: "THESIS", text: "Plain-English questions to MongoDB queries, 97% fewer translation failures" },
  { label: "QUANT RESEARCH", text: "Caught survivorship bias inflating a strategy's Sharpe ratio fourfold" },
  { label: "CO-OP", text: "Automated 70% of a team's manual workflow" },
  { label: "OLYMPIAD", text: "Gold medal, ranked 1st in the UAE" },
  { label: "SCHOLARSHIPS", text: "$110K awarded at UBC" },
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
