import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

// Sharpe ratio of the finished strategy on its held-out test year, as each realism check is added.
const steps = [
  { label: "Original backtest", value: 1.46 },
  { label: "Rebuilt from exchange archive", value: 1.45 },
  { label: "Stablecoins & tokenized stocks removed", value: 1.26 },
  { label: "Delisted coins added back", value: 0.35, highlight: true },
  { label: "Funding trade priced on futures", value: -0.01 },
  { label: "Limit orders must actually fill", value: 0.12 },
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
          <span className="meta-note mono">PERSONAL PROJECT · 2026 · LIVE FORWARD TEST RUNNING</span>
        </div>
        <h3 className="feature-title display">Statistical Arbitrage in Cryptocurrencies</h3>
        <p className="feature-summary">
          Momentum, order-flow and funding-rate strategies on six years of Binance data, combined into one walk-forward
          portfolio. On a year of data it never saw during research, it returned a <b>1.46 Sharpe ratio</b> with almost no
          exposure to Bitcoin. Then I tried to break it, and a revised version is now running a live forward test.
        </p>
        <div className="figures">
          <div className="figure">
            <div className="display">1.46</div>
            <p>Sharpe ratio on the held-out year</p>
          </div>
          <div className="figure">
            <div className="display">−0.02</div>
            <p>Beta to Bitcoin: returns that don&apos;t just ride the market</p>
          </div>
          <div className="figure">
            <div className="display">1.68 / 2.42</div>
            <p>Funding-rate strategy Sharpe, development / validation</p>
          </div>
          <div className="figure">
            <div className="display">47</div>
            <p>Strategy variations tested, all logged to correct for overfitting</p>
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
          <span className="mono">STRESS TEST</span>
          <span className="meta-note mono">HELD-OUT YEAR, JUL 2025 – JUL 2026</span>
        </div>
        <h4 className="chart-title">Sharpe ratio after each realism check</h4>
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
            Survivorship bias. My original coin list only had coins that still exist today. Adding back the ones that
            died erased most of the returns, which is exactly what the test was for.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
