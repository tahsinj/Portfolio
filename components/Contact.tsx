import { HIST_VIEW, distribution } from "@/lib/simulate";
import Reveal from "./Reveal";
import { Mail } from "./Icons";

const { bars, curve } = distribution();

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-orb" aria-hidden="true" />
      <Reveal className="contact-inner">
        <div className="eyebrow mono" style={{ letterSpacing: "0.28em", marginBottom: 0 }}>
          05 · CONTACT
        </div>
        <h2 className="display">LET&apos;S TALK</h2>
        <p className="contact-copy">
          Hiring for quant research, trading or software engineering? I&apos;d like to hear about it.
        </p>
        <div className="contact-actions">
          <a className="btn primary" href="mailto:tahsin.jawwad23@gmail.com">
            <Mail size={16} />
            TAHSIN.JAWWAD23@GMAIL.COM
          </a>
          <a className="btn ghost" href="https://www.linkedin.com/in/tahsin-jawwad" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a className="btn ghost" href="https://github.com/tahsinj" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
        </div>
      </Reveal>
      <div className="container distribution" aria-hidden="true">
        <svg viewBox={`0 0 ${HIST_VIEW.width} ${HIST_VIEW.height}`} preserveAspectRatio="none">
          <path className="hist" d={bars} />
          <path className="pdf" d={curve} />
        </svg>
      </div>
    </section>
  );
}
