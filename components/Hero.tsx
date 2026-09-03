"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import CountUp from "./CountUp";
import PricePaths from "./PricePaths";
import { ArrowDown, ArrowUpRight, Download } from "./Icons";

type Focus = "quant" | "swe" | "both";

const focuses: Record<Focus, { label: string; headline: string; summary: string; tools: string[] }> = {
  quant: {
    label: "QUANT",
    headline: "Quantitative researcher",
    summary:
      "MQF candidate at Waterloo. I research systematic strategies sceptically: survivorship-free data, realistic costs and fills, and Sharpe ratios deflated for every configuration tried.",
    tools: ["Python", "pandas", "statsmodels", "SciPy", "C++", "Backtesting"],
  },
  swe: {
    label: "SOFTWARE",
    headline: "Software engineer",
    summary:
      "Python, Java, C++ and TypeScript: workflow automation that cut a team's manual work by 70%, LLM classifiers, query translators and desktop apps.",
    tools: ["Python", "Java", "C++", "TypeScript", "React", "Docker"],
  },
  both: {
    label: "BOTH",
    headline: "Quant researcher & software engineer",
    summary:
      "Quantitative finance at Waterloo, computer science from UBC. I do the research, and I build the software it runs on.",
    tools: ["Python", "C++", "SQL", "pandas", "statsmodels", "Docker"],
  },
};

const courses = [
  { name: "Time Series & Forecasting", score: 100 },
  { name: "Applied Regression", score: 100 },
  { name: "Stochastic Modelling & Simulation", score: 99 },
  { name: "Matrix Algebra", score: 99 },
];

export default function Hero() {
  const [focus, setFocus] = useState<Focus>("both");
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const current = focuses[focus];

  const moveGlow = (e: React.MouseEvent<HTMLElement>) => {
    const glow = glowRef.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glow.style.opacity = "1";
    glow.style.transform = `translate(${e.clientX - rect.left - 320}px, ${e.clientY - rect.top - 320}px)`;
  };

  const tiltCard = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`;
  };

  return (
    <section
      id="top"
      className="hero"
      onMouseMove={moveGlow}
      onMouseLeave={() => glowRef.current && (glowRef.current.style.opacity = "0")}
    >
      <div ref={glowRef} className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb blue" aria-hidden="true" />
      <div className="orb violet" aria-hidden="true" />
      <PricePaths />

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="kicker mono rise">
            <span className="kicker-rule" />
            <span>MASTER OF QUANTITATIVE FINANCE · UNIVERSITY OF WATERLOO</span>
            <span className="cursor" aria-hidden="true">
              _
            </span>
          </div>

          <h1 className="hero-name display glitch">
            TAHSIN
            <br />
            JAWWAD
          </h1>
          <p className="hero-headline display rise delay-1">{current.headline}</p>
          <p className="hero-summary rise delay-2">{current.summary}</p>

          <div className="focus rise delay-3" role="group" aria-label="Choose what you are hiring for">
            <span className="focus-label mono">HIRING FOR</span>
            <div className="segmented">
              {(["quant", "swe", "both"] as Focus[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className="segment"
                  aria-pressed={focus === key}
                  onClick={() => setFocus(key)}
                >
                  {focuses[key].label}
                </button>
              ))}
            </div>
            <div className="tags">
              {current.tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="cta-row rise delay-4">
            <a className="btn primary" href="#work">
              VIEW MY WORK
              <ArrowDown size={16} />
            </a>
            <a className="btn ghost" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download size={16} />
              RÉSUMÉ
            </a>
            <a className="text-link" href="https://github.com/tahsinj" target="_blank" rel="noopener noreferrer">
              GITHUB <ArrowUpRight />
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/tahsin-jawwad"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN <ArrowUpRight />
            </a>
          </div>

          <div className="stat-tiles rise delay-5">
            <div className="stat-tile corners">
              <div className="value display">
                <CountUp value={96.7} decimals={1} suffix="%" />
              </div>
              <p>Average across my UBC computer science degree</p>
            </div>
            <div className="stat-tile corners">
              <div className="value display">
                <CountUp value={70} suffix="%" />
              </div>
              <p>Of a team&apos;s manual work automated in my developer co-op</p>
            </div>
            <div className="stat-tile corners">
              <div className="value display">Gold</div>
              <p>Math Olympiad medal, ranked 1st in the UAE</p>
            </div>
          </div>
        </div>

        <div
          className="profile"
          onMouseMove={tiltCard}
          onMouseLeave={() => cardRef.current && (cardRef.current.style.transform = "")}
        >
          <div ref={cardRef} className="profile-card corners">
            <div className="profile-top mono">
              <span>PROFILE</span>
              <span>WATERLOO, ON</span>
            </div>
            <div className="portrait notch">
              <Image src="/pp.jpg" alt="Portrait of Tahsin Jawwad" fill sizes="(max-width: 760px) 90vw, 400px" priority />
              <div className="halftone" aria-hidden="true" />
              <div className="portrait-caption">
                <div>
                  <div className="name display">TAHSIN JAWWAD</div>
                  <div className="role mono">QUANT · SOFTWARE</div>
                </div>
                <div className="year display" aria-hidden="true">
                  &apos;27
                </div>
              </div>
            </div>
            <dl className="facts">
              <dt>NOW</dt>
              <dd>MQF, University of Waterloo · Dec 2027</dd>
              <dt>BEFORE</dt>
              <dd>BSc Honours CS, UBC · GPA 4.32/4.33</dd>
              <dt>STACK</dt>
              <dd>Python · C++ · SQL · R · Java</dd>
            </dl>
            <div className="courses">
              <div className="courses-label mono">QUANT-RELEVANT UBC COURSES · FINAL %</div>
              <div className="course-list">
                {courses.map((course) => (
                  <div key={course.name} className="course">
                    <span>{course.name}</span>
                    <span className="mono">{course.score}</span>
                    <span className="meter">
                      <span style={{ width: `${course.score}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
