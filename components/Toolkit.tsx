import {
  siCplusplus,
  siDocker,
  siGit,
  siGithubactions,
  siJupyter,
  siMongodb,
  siMysql,
  siNumpy,
  siOpenjdk,
  siPandas,
  siPython,
  siPytorch,
  siR,
  siScikitlearn,
  siScipy,
  siTypescript,
} from "simple-icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Tool = { name: string; path?: string; stroke?: React.ReactNode };

// Line icons for things that don't have a logo.
const lineIcons = {
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </>
  ),
  backtest: (
    <>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  wave: <path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0" />,
  dice: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1.2" />
      <circle cx="16" cy="16" r="1.2" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  costs: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9.5c-.6-1-1.7-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.3 0-2.4-.5-3-1.5" />
      <path d="M12 6v2M12 16v2" />
    </>
  ),
  check: (
    <>
      <path d="M9 11l3 3 8-8" />
      <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
    </>
  ),
  sigma: <path d="M18 4H6l6 8-6 8h12" />,
};

const groups: { title: string; eyebrow: string; tools: Tool[] }[] = [
  {
    eyebrow: "WHAT I WRITE",
    title: "Languages",
    tools: [
      { name: "Python", path: siPython.path },
      { name: "C++", path: siCplusplus.path },
      { name: "SQL", stroke: lineIcons.database },
      { name: "R", path: siR.path },
      { name: "Java", path: siOpenjdk.path },
      { name: "TypeScript", path: siTypescript.path },
    ],
  },
  {
    eyebrow: "HOW I TEST IDEAS",
    title: "Quant methods",
    tools: [
      { name: "Backtesting", stroke: lineIcons.backtest },
      { name: "Time series & regression", stroke: lineIcons.wave },
      { name: "Monte Carlo simulation", stroke: lineIcons.dice },
      { name: "Trading-cost modelling", stroke: lineIcons.costs },
      { name: "Overfitting checks", stroke: lineIcons.check },
      { name: "Stochastic calculus", stroke: lineIcons.sigma },
    ],
  },
  {
    eyebrow: "DATA & ML",
    title: "Libraries",
    tools: [
      { name: "pandas", path: siPandas.path },
      { name: "NumPy", path: siNumpy.path },
      { name: "SciPy", path: siScipy.path },
      { name: "statsmodels", stroke: lineIcons.chart },
      { name: "scikit-learn", path: siScikitlearn.path },
      { name: "PyTorch", path: siPytorch.path },
    ],
  },
  {
    eyebrow: "SHIPPING IT",
    title: "Tools",
    tools: [
      { name: "Git", path: siGit.path },
      { name: "GitHub Actions", path: siGithubactions.path },
      { name: "Docker", path: siDocker.path },
      { name: "Jupyter", path: siJupyter.path },
      { name: "MongoDB", path: siMongodb.path },
      { name: "MySQL", path: siMysql.path },
    ],
  },
];

function ToolIcon({ tool }: { tool: Tool }) {
  if (tool.path) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d={tool.path} />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {tool.stroke}
    </svg>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="section">
      <div className="container">
        <SectionHeading number="03" eyebrow="LANGUAGES, METHODS, TOOLS" title="TOOLKIT" />
        <div className="toolkit-grid">
          {groups.map((group, i) => (
            <Reveal key={group.title} stagger={i % 2 === 1 ? 1 : undefined} className="toolkit-card corners">
              <div className="mono toolkit-eyebrow">{group.eyebrow}</div>
              <h3 className="display">{group.title}</h3>
              <ul className="tool-list">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="tool">
                    <ToolIcon tool={tool} />
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
              {group.title === "Quant methods" && (
                <p className="toolkit-note">Stochastic calculus is part of my MQF coursework this term.</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
