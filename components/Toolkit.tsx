import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    eyebrow: "QUANT METHODS",
    title: "Research",
    color: "var(--violet)",
    eyebrowColor: "var(--violet-hi)",
    skills: [
      "Backtesting · walk-forward optimization",
      "Time-series & regression analysis",
      "Multiple-testing correction · deflated Sharpe",
      "Transaction-cost & market-impact modelling",
      "Stochastic modelling & simulation",
    ],
    pending: { skill: "Stochastic calculus", note: "AT WATERLOO" },
  },
  {
    eyebrow: "LANGUAGES & TOOLS",
    title: "Engineering",
    color: "var(--blue)",
    eyebrowColor: "var(--blue-hi)",
    skills: [
      "Python · C++ · Java",
      "SQL · R",
      "TypeScript · React · Electron",
      "MySQL · MongoDB",
      "Git · GitHub Actions · Docker",
      "Unit-tested research code",
    ],
  },
  {
    eyebrow: "LIBRARIES",
    title: "Data & ML",
    color: "var(--white)",
    eyebrowColor: "var(--muted)",
    skills: [
      "pandas · NumPy",
      "SciPy · statsmodels",
      "scikit-learn",
      "PyTorch · TensorFlow",
      "OpenAI API · LLM pipelines",
      "Recommender systems",
    ],
  },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="section">
      <div className="container">
        <SectionHeading number="03" eyebrow="METHODS, LANGUAGES, LIBRARIES" title="TOOLKIT" />
        <div className="toolkit-grid">
          {groups.map((group, i) => (
            <Reveal
              key={group.title}
              stagger={i === 1 ? 1 : i === 2 ? 2 : undefined}
              className="toolkit-card corners"
            >
              <div className="mono" style={{ color: group.eyebrowColor }}>
                {group.eyebrow}
              </div>
              <h3 className="display">{group.title}</h3>
              <ul className="skill-list" style={{ "--node": group.color } as React.CSSProperties}>
                {group.skills.map((skill) => (
                  <li key={skill} className="skill">
                    {skill}
                  </li>
                ))}
                {group.pending && (
                  <li className="skill pending" style={{ color: "var(--dim)" }}>
                    {group.pending.skill}
                    <span className="note mono">{group.pending.note}</span>
                  </li>
                )}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
