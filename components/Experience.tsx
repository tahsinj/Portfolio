import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Entry = {
  dates: string;
  status?: string;
  current?: boolean;
  title: string;
  org: string;
  points: React.ReactNode[];
};

const education: Entry[] = [
  {
    dates: "SEP 2026 — DEC 2027",
    status: "IN PROGRESS",
    current: true,
    title: "Master of Quantitative Finance",
    org: "University of Waterloo",
    points: [<>Stochastic Calculus for Quantitative Finance, Estimation &amp; Hypothesis Testing.</>],
  },
  {
    dates: "SEP 2022 — APR 2026",
    title: "BSc Honours, Computer Science",
    org: "University of British Columbia · Minor in Data Science",
    points: [
      <>
        <b>96.7%</b> average, GPA <b>4.32/4.33</b>.
      </>,
      <>Dean&apos;s List 2022–24, Dean&apos;s Scholar 2024–25.</>,
      <>
        <b>$110K</b> in scholarships, including the $80K International Major Entrance Scholarship.
      </>,
    ],
  },
  {
    dates: "2022",
    title: "A Levels",
    org: "The Winchester School, Jebel Ali · Dubai",
    points: [
      <>
        <b>4 A*</b>, Best Across Three in the UAE.
      </>,
    ],
  },
];

const work: Entry[] = [
  {
    dates: "MAY — DEC 2025",
    status: "CO-OP",
    title: "Junior Developer",
    org: "Aether Automation Inc. · Vancouver",
    points: [
      <>
        Automated Zoho workflows in Deluge, Python and JavaScript that sync data across teams, cutting manual work by{" "}
        <b>70%</b>.
      </>,
      <>
        Built an OpenAI-based classifier that sorts customer emails and drafts replies, cutting response time by{" "}
        <b>60%</b>.
      </>,
    ],
  },
  {
    dates: "2025 — 2026",
    status: "RESEARCH",
    title: "Honours Thesis Researcher",
    org: "University of British Columbia",
    points: [
      <>
        Text-to-NoSQL via SQL, written up as a <b>first-author manuscript</b>. Details in Selected Work above.
      </>,
    ],
  },
];

function Timeline({ heading, entries, from }: { heading: string; entries: Entry[]; from: "left" | "right" }) {
  return (
    <div className="timeline-column">
      <h3 className="timeline-heading mono">{heading}</h3>
      <ol className="timeline">
        {entries.map((entry) => (
          <Reveal as="li" from={from} key={entry.title} className="timeline-row">
            <div className={entry.current ? "timeline-mark current" : "timeline-mark"} aria-hidden="true" />
            <div className="timeline-body">
              <div className="timeline-meta">
                <span className={entry.current ? "timeline-date current mono" : "timeline-date mono"}>
                  {entry.dates}
                </span>
                {entry.status && <span className={entry.current ? "chip blue" : "chip"}>{entry.status}</span>}
              </div>
              <h4>{entry.title}</h4>
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
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading number="02" eyebrow="WHERE I'VE STUDIED AND WORKED" title="BACKGROUND" />
        <div className="timeline-columns">
          <Timeline heading="EDUCATION" entries={education} from="left" />
          <Timeline heading="EXPERIENCE" entries={work} from="right" />
        </div>
      </div>
    </section>
  );
}
