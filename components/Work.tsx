"use client";

import { useState } from "react";
import { projects, type Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatArbFeature from "./StatArbFeature";

type Filter = "all" | Category;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "quant", label: "QUANT" },
  { id: "research", label: "RESEARCH & ML" },
  { id: "engineering", label: "ENGINEERING" },
];

// The two featured pieces sit outside the card grid.
const featured: Record<string, Category[]> = {
  statArb: ["quant"],
};

const matches = (filter: Filter, categories: Category[]) => filter === "all" || categories.includes(filter);

export default function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => matches(filter, p.categories));

  const count = (id: Filter) =>
    projects.filter((p) => matches(id, p.categories)).length +
    Object.values(featured).filter((cats) => matches(id, cats)).length;

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeading number="01" eyebrow="RESEARCH & PROJECTS" title="SELECTED WORK">
          <div className="filters" role="group" aria-label="Filter work">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className="filter"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label} <b>{String(count(f.id)).padStart(2, "0")}</b>
              </button>
            ))}
          </div>
        </SectionHeading>

        {matches(filter, featured.statArb) && <StatArbFeature />}

        <div className="project-grid">
          {visible.map((project, i) => (
            <Reveal key={project.title} stagger={i === 1 ? 1 : i === 2 ? 2 : undefined}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
