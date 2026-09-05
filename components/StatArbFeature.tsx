import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

// Lockbox Sharpe of the frozen walk-forward book as each realism fix is applied.
const steps = [
  { label: "As run, research coin list", value: 1.46 },
  { label: "Same list, archive data", value: 1.45 },
  { label: "Pegged & tokenized assets out", value: 1.26 },
  { label: "All 585 pairs, delisted included", value: 0.35, highlight: true },
  { label: "+ Carry on perp prices", value: -0.01 },
  { label: "+ Limit orders must fill", value: 0.12 },
];

const MIN = -0.1;
const MAX = 1.5;
const pos = (v: number) => ((v - MIN) / (MAX - MIN)) * 100;
const zero = pos(0);

function signed(v: number) {
  return `${v < 0 ? "−" : "+"}${Math.abs(v).toFixed(2)}`;
}

export default function StatArbFeature() {
  return (
    <Reveal as="article" from="right" className="feature corners">
      <div className="feature-stripe" aria-hidden="true" />
      <div className="feature-copy">
        <div className="feature-meta">
          <span className="chip violet">QUANT RESEARCH</span>
          <span className="meta-note mono">2026 · v2 FORWARD-TESTING SINCE OCT 2026</span>
        </div>
        <h3 className="feature-title display">Statistical Arbitrage in Cryptocurrencies</h3>
        <p className="feature-summary">
          Momentum, reversal, order-flow and funding-carry strategies on 2020–26 Binance spot and perp data, combined
          into a walk-forward book. The interesting part is what happened when I stopped letting the data flatter it.
        </p>
        <div className="figures">
          <div className="figure">
            <div className="display">47</div>
            <p>Strategy configs researched and registered</p>
          </div>
          <div className="figure">
            <div className="display">−0.02</div>
            <p>Book beta to BTC</p>
          </div>
          <div className="figure">
            <div className="display">1.68 / 2.42</div>
            <p>Funding-carry Sharpe, dev / validation</p>
          </div>
          <div className="figure">
            <div className="display">43%</div>
            <p>Order-flow P&amp;L lost to missed limit fills</p>
          </div>
        </div>
        <div className="tags">
          {["Python", "pandas", "NumPy", "SciPy", "statsmodels", "Deflated Sharpe"].map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="links">
          <a className="text-link" href="https://github.com/tahsinj/crypto-statarb" target="_blank" rel="noopener noreferrer">
            CODE <ArrowUpRight />
          </a>
          <a
            className="text-link"
            href="https://github.com/tahsinj/crypto-statarb/blob/main/reports/REPORT.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            REPORT <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="feature-chart">
        <div className="chart-head">
          <span className="mono">ROBUSTNESS CHECK</span>
          <span className="meta-note mono">LOCKBOX · 2025-07 → 2026-07</span>
        </div>
        <h4 className="chart-title">Lockbox Sharpe of the frozen book, one realism fix at a time</h4>
        <div className="bars">
          {steps.map((step, i) => {
            const negative = step.value < 0;
            const left = negative ? pos(step.value) : zero;
            const width = Math.abs(pos(step.value) - zero);
            return (
              <div key={step.label} className="bar-row" title={`${step.label}: ${signed(step.value)}`}>
                <span className={step.highlight ? "bar-label strong" : "bar-label"}>{step.label}</span>
                <span className="bar-track">
                  <span className="bar-zero" style={{ left: `${zero}%` }} aria-hidden="true" />
                  {step.highlight && (
                    <span
                      className="bar-gap"
                      style={{ left: `${pos(step.value)}%`, width: `${pos(steps[i - 1].value) - pos(step.value)}%` }}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={negative ? "bar-fill negative" : "bar-fill"}
                    style={{ left: `${left}%`, width: `${width}%`, animationDelay: `${i * 0.1}s` }}
                  />
                </span>
                <span className="bar-value mono">{signed(step.value)}</span>
              </div>
            );
          })}
          <div className="bar-row" aria-hidden="true">
            <span className="bar-label" />
            <span className="axis mono">
              <span style={{ left: `${zero}%` }}>0</span>
              <span style={{ left: `${pos(0.5)}%` }}>0.5</span>
              <span style={{ left: `${pos(1)}%` }}>1.0</span>
              <span>1.5</span>
            </span>
            <span />
          </div>
        </div>
        <div className="callout">
          <span className="chip violet">−0.91</span>
          <p>
            Survivorship bias. The research coin list was missing 46% of the historical top-100; putting the delisted
            coins back took most of the edge with it.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
