import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const major = [
  {
    headline: (
      <>
        Gold <small>#1 UAE</small>
      </>
    ),
    title: "Mathematics Olympiad",
    detail: "International Olympiad Foundation · UAE Rank 1 in 2019, Rank 3 in 2020",
  },
  {
    headline: "3 years",
    title: "Dean's List & Dean's Scholar",
    detail: "University of British Columbia · Dean's List 2022–24, Dean's Scholar 2024–25",
  },
  {
    headline: "$110K",
    title: "Scholarships",
    detail: "University of British Columbia · including the $80K International Major Entrance Scholarship",
  },
];

const minor = [
  { year: "2019", title: "UAE Team, 16th Hanoi Open Mathematics Competition", detail: "Hanoi, Vietnam" },
  { year: "2022", title: "Best Across Three in the UAE", detail: "Cambridge International A Levels · 4 A*" },
];

export default function Honours() {
  return (
    <section id="honours" className="section" style={{ paddingBottom: 120 }}>
      <div className="container">
        <SectionHeading number="04" eyebrow="AWARDS & COMPETITIONS" title="HONOURS" />
        <Reveal from="right" className="honours-grid">
          {major.map((item) => (
            <article key={item.title} className="card honour">
              <div className="display">{item.headline}</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </Reveal>
        <Reveal from="left" className="honours-grid">
          {minor.map((item) => (
            <article key={item.title} className="card honour-row">
              <span className="mono">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
