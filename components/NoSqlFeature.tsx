import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

const TOTAL = 2775;

export default function NoSqlFeature() {
  return (
    <Reveal as="article" from="left" className="feature corners">
      <div className="feature-copy">
        <div className="feature-meta">
          <span className="chip blue">HONOURS THESIS</span>
          <span className="chip">FIRST-AUTHOR MANUSCRIPT</span>
          <span className="meta-note mono">UBC</span>
        </div>
        <h3 className="feature-title display">Text-to-NoSQL via SQL</h3>
        <p className="feature-summary">
          Turning plain-English questions into MongoDB queries by going through SQL first. I extended a SQL-to-MongoDB
          translator to handle joins, grouping, set operations and nested subqueries.
        </p>
        <ul className="bullets">
          <li>
            Translation failures went from <b>1,021 to 32</b>, with nothing that previously worked breaking.
          </li>
          <li>
            Checked <b>321 failures</b> by hand: 75% of the remaining errors came from the step before mine, not the
            translator.
          </li>
        </ul>
        <div className="tags">
          {["Java", "Python", "MongoDB", "LLMs", "Docker"].map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="links">
          <a className="text-link" href="https://github.com/tahsinj/text-to-nosql" target="_blank" rel="noopener noreferrer">
            CODE <ArrowUpRight />
          </a>
          <a
            className="text-link"
            href="https://github.com/tahsinj/text-to-nosql/blob/main/technical_report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            TECHNICAL REPORT <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="feature-chart">
        <div className="chart-head">
          <span className="mono">RESULTS</span>
          <span className="meta-note mono">2,775-QUESTION BENCHMARK</span>
        </div>

        <div className="bars">
          <h4 className="chart-subtitle">Questions that failed to translate</h4>
          <BarRow label="Before" value={1021} max={TOTAL} display="1,021" color="violet" />
          <BarRow label="After" value={32} max={TOTAL} display="32" color="violet" strong delay={0.15} />
        </div>

        <div className="bars">
          <h4 className="chart-subtitle">Questions answered correctly</h4>
          <BarRow label="Given correct SQL" value={96} max={100} display="96.0%" delay={0.3} />
          <BarRow label="Full pipeline" value={88.4} max={100} display="88.4%" delay={0.45} />
        </div>
      </div>
    </Reveal>
  );
}

type BarRowProps = {
  label: string;
  value: number;
  max: number;
  display: string;
  color?: "violet";
  strong?: boolean;
  delay?: number;
};

function BarRow({ label, value, max, display, color, strong, delay = 0 }: BarRowProps) {
  return (
    <div className="bar-row" title={`${label}: ${display}`}>
      <span className={strong ? "bar-label strong" : "bar-label"}>{label}</span>
      <span className="bar-track filled">
        <span
          className={color ? `bar-fill ${color}` : "bar-fill"}
          style={{ left: 0, width: `${(value / max) * 100}%`, animationDelay: `${delay}s` }}
        />
      </span>
      <span className="bar-value mono">{display}</span>
    </div>
  );
}
