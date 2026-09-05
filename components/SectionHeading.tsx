import Reveal from "./Reveal";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export default function SectionHeading({ number, eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <Reveal from="left" className="title-group">
        <span className="section-number display" aria-hidden="true">
          {number}
        </span>
        <div>
          <div className="eyebrow mono">{eyebrow}</div>
          <h2 className="section-title display">{title}</h2>
        </div>
      </Reveal>
      {children}
    </div>
  );
}
