import type { Project } from "@/data/projects";
import { ArrowUpRight, Lock } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div className="top mono">
        <span className="kind">{project.kind}</span>
        <span className="year">{project.year}</span>
      </div>
      <h3 className="display">{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="bottom">
        {project.link ? (
          <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
            CODE <ArrowUpRight />
          </a>
        ) : (
          <span className="private mono">
            <Lock />
            PRIVATE REPO
          </span>
        )}
        <span className="category mono">{project.label}</span>
      </div>
    </article>
  );
}
