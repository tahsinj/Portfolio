import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

const pipeline = [
  { label: "Question", note: "plain English" },
  { label: "LLM", note: "DAIL-SQL writes SQL" },
  { label: "My translator", note: "SQL → MongoDB", mine: true },
  { label: "MongoDB", note: "runs natively" },
];

export default function NoSqlFeature() {
  return (
    <Reveal as="article" from="left" className="feature corners">
      <div className="feature-copy">
        <div className="feature-meta">
          <span className="chip blue">HONOURS THESIS</span>
          <span className="chip">FIRST-AUTHOR MANUSCRIPT</span>
          <span className="meta-note mono">UBC · 2026</span>
        </div>
        <h3 className="feature-title display">Text-to-NoSQL</h3>
        <p className="feature-summary">
          Asking a MongoDB database questions in plain English. A language model turns the question into SQL, and my
          translator turns that SQL into MongoDB aggregation pipelines that run inside the database, instead of pulling
          every record out and filtering in Java.
        </p>

        <ol className="pipeline" aria-label="How the pipeline works">
          {pipeline.map((step) => (
            <li key={step.label} className={step.mine ? "pipeline-step mine" : "pipeline-step"}>
              <span className="pipeline-label">{step.label}</span>
              <span className="pipeline-note mono">{step.note}</span>
            </li>
          ))}
        </ol>

        <ul className="bullets">
          <li>
            Added native support for <b>joins, GROUP BY / HAVING, UNION / INTERSECT / EXCEPT, correlated and scalar
            subqueries</b> and computed columns, plus clean-up passes for SQL quirks that LLMs produce.
          </li>
          <li>
            End to end it answers <b>88.4%</b> of questions correctly, ahead of prompting Gemini directly (86.8%) and of
            GPT-5.6 given the same SQL (81.8%), with no extra LLM call once the SQL exists.
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
            href="https://github.com/tahsinj/text-to-nosql/blob/main/thesis.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            THESIS (PDF) <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="feature-chart">
        <div className="chart-head">
          <span className="mono">RESULTS</span>
          <span className="meta-note mono">TEND-SPIDER · 2,775 QUESTIONS</span>
        </div>

        <div className="bars">
          <h4 className="chart-subtitle">Questions answered correctly</h4>
          <BarRow label="My translator, correct SQL" value={96.04} display="96.0%" strong />
          <BarRow label="My full pipeline" value={88.43} display="88.4%" strong delay={0.1} />
          <BarRow label="Gemini, direct" value={86.81} display="86.8%" muted delay={0.2} />
          <BarRow label="GPT-5.6, same SQL" value={81.77} display="81.8%" muted delay={0.3} />
          <span className="chart-note mono">Results checked by running each query on MongoDB</span>
        </div>

        <div className="bars">
          <h4 className="chart-subtitle">Questions translated successfully</h4>
          <BarRow label="Translator I started from" value={63.2} display="63.2%" color="violet" delay={0.4} />
          <BarRow label="After my changes" value={98.9} display="98.9%" color="violet" strong delay={0.5} />
          <span className="chart-note mono">1,021 failures down to 32, zero regressions</span>
        </div>
      </div>
    </Reveal>
  );
}

type BarRowProps = {
  label: string;
  value: number;
  display: string;
  color?: "violet";
  strong?: boolean;
  muted?: boolean;
  delay?: number;
};

function BarRow({ label, value, display, color, strong, muted, delay = 0 }: BarRowProps) {
  return (
    <div className="bar-row" title={`${label}: ${display}`}>
      <span className={strong ? "bar-label strong" : "bar-label"}>{label}</span>
      <span className="bar-track filled">
        <span
          className={["bar-fill", color, muted && "muted"].filter(Boolean).join(" ")}
          style={{ left: 0, width: `${value}%`, animationDelay: `${delay}s` }}
        />
      </span>
      <span className="bar-value mono">{display}</span>
    </div>
  );
}
