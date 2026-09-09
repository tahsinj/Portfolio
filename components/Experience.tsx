import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Entry = {
  dates: string;
  status: string;
  current?: boolean;
  title: string;
  org: string;
  points: React.ReactNode[];
};

const entries: Entry[] = [
  {
    dates: "SEP 2026 — DEC 2027",
    status: "IN PROGRESS",
    current: true,
    title: "Master of Quantitative Finance",
    org: "University of Waterloo · Waterloo, ON",
    points: [
      <>
        Coursework: <b>Stochastic Calculus for Quantitative Finance</b>, <b>Estimation &amp; Hypothesis Testing</b>.
      </>,
    ],
  },
  {
    dates: "MAY — DEC 2025",
    status: "CO-OP",
    title: "Junior Developer",
    org: "Aether Automation Inc. · Vancouver, BC",
    points: [
      <>
        Cut manual workload <b>70%</b> by automating Zoho workflows in Deluge, Python and JavaScript that sync data
        across teams.
      </>,
      <>
        Cut email response time <b>60%</b> with an OpenAI-based classifier that triages customer inquiries and drafts
        replies.
      </>,
    ],
  },
  {
    dates: "SEP 2022 — APR 2026",
    status: "COMPLETED",
    title: "BSc Honours, Computer Science (Minor in Data Science)",
    org: "University of British Columbia · Kelowna, BC",
    points: [
      <>
        <b>96.7%</b> average, GPA <b>4.32/4.33</b>. Dean&apos;s List 2022–24, Dean&apos;s Scholar 2024–25.
      </>,
      <>
        <b>$110K</b> in scholarships, including the $80K International Major Entrance Scholarship.
      </>,
      <>
        Stochastic Modelling &amp; Simulation (99), Time Series &amp; Forecasting (100), Applied Regression (100),
        Machine Learning (100), Matrix Algebra (99), Sampling &amp; Design (99), Analysis of Algorithms (98).
      </>,
    ],
  },
  {
    dates: "2022",
    status: "COMPLETED",
    title: "A Levels & IGCSE",
    org: "The Winchester School, Jebel Ali · Dubai, UAE",
    points: [
      <>
        A Levels: <b>4 A*</b>, Best Across Three in the UAE. IGCSE: 9 A*, 1 A.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading number="02" eyebrow="EDUCATION & WORK" title="EXPERIENCE" />
        <ol className="timeline">
          {entries.map((entry) => (
            <Reveal as="li" from="right" key={entry.title} className="timeline-row">
              <div className={entry.current ? "timeline-date current mono" : "timeline-date mono"}>{entry.dates}</div>
              <div className={entry.current ? "timeline-mark current" : "timeline-mark"} aria-hidden="true" />
              <div className="timeline-body">
                <span className={entry.current ? "chip blue" : "chip"}>{entry.status}</span>
                <h3>{entry.title}</h3>
                <div className="org">{entry.org}</div>
                <ul className="bullets">
                  {entry.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
