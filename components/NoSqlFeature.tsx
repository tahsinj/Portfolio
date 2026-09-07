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
          <span className="meta-note mono">UBC · 2025–26</span>
        </div>
        <h3 className="feature-title display">Text-to-NoSQL via SQL</h3>
        <p className="feature-summary">
          Natural-language questions to MongoDB queries, using SQL as the bridge. I extended a rule-based SQL-to-MongoDB
          translator to joins, grouping, set operations and correlated subqueries, and resolved SQL tables to nested
          collections and arrays.
        </p>
        <ul className="bullets">
          <li>
            <b>Zero regressions</b> while cutting translation failures by 97%.
          </li>
          <li>
            Audited <b>321 failures</b> by hand and traced 75% of the gold-to-predicted accuracy loss to upstream
            Text-to-SQL errors.
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
          <span className="meta-note mono">TEND-SPIDER · 2,775 QUERIES</span>
        </div>

        <div className="bars">
          <h4 className="chart-subtitle">Translation failures</h4>
          <BarRow label="Original translator" value={1021} max={TOTAL} display="1,021" color="violet" />
          <BarRow label="Extended translator" value={32} max={TOTAL} display="32" color="violet" strong delay={0.15} />
          <span className="chart-note mono">Track = all 2,775 queries · −97%</span>
        </div>

        <div className="bars">
          <h4 className="chart-subtitle">Execution accuracy</h4>
          <BarRow label="From gold SQL" value={96} max={100} display="96.0%" delay={0.3} />
          <BarRow label="End to end" value={88.4} max={100} display="88.4%" delay={0.45} />
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
