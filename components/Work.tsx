"use client";

import { useState } from "react";
import { featured, projects, type Tab } from "@/data/projects";
import NoSqlFeature from "./NoSqlFeature";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatArbFeature from "./StatArbFeature";

const tabs: { id: Tab; label: string }[] = [
  { id: "top", label: "TOP" },
  { id: "quant", label: "QUANT" },
  { id: "research", label: "RESEARCH" },
  { id: "ml", label: "ML" },
  { id: "all", label: "ALL" },
];

const count = (tab: Tab) =>
  projects.filter((p) => p.tabs.includes(tab)).length + featured.filter((f) => f.tabs.includes(tab)).length;

const shows = (id: "statArb" | "noSql", tab: Tab) => featured.some((f) => f.id === id && f.tabs.includes(tab));

export default function Work() {
  const [tab, setTab] = useState<Tab>("top");
  const visible = projects.filter((p) => p.tabs.includes(tab));

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeading number="01" eyebrow="QUANT, RESEARCH & ENGINEERING" title="PROJECTS">
          <div className="filters" role="group" aria-label="Filter projects">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                className="filter"
                aria-pressed={tab === t.id}
                onClick={() => setTab(t.id)}
              >
                {t.label} <b>{String(count(t.id)).padStart(2, "0")}</b>
              </button>
            ))}
          </div>
        </SectionHeading>

        {shows("statArb", tab) && <StatArbFeature />}
        {shows("noSql", tab) && <NoSqlFeature />}

        <div className="project-grid">
          {visible.map((project, i) => (
            <Reveal key={project.id} stagger={i % 3 === 1 ? 1 : i % 3 === 2 ? 2 : undefined}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
