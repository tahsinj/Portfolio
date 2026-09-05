export type Category = "quant" | "research" | "engineering";

export type Project = {
  kind: string;
  label: string;
  categories: Category[];
  year: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    kind: "SIDE PROJECT",
    label: "ENGINEERING",
    categories: ["engineering"],
    year: "2026",
    title: "Pokémon Assistant",
    description:
      "Desktop companion for open-world Pokémon games built on the Cobblemon mod: team builder, damage and KO-odds calculator, and a live battle tracker fed by a Fabric mod over a local WebSocket.",
    tags: ["Electron", "React", "TypeScript", "WebSocket", "Vitest"],
  },
  {
    kind: "TEAM PROJECT",
    label: "ENGINEERING",
    categories: ["engineering"],
    year: "2024",
    title: "Discord Clone",
    description:
      "Real-time chat app built by a team for a software engineering course: dockerized, with Clerk auth and CI/CD.",
    tags: ["Next.js", "TypeScript", "Docker", "Jest"],
    link: "https://github.com/tahsinj/DiscordClone",
  },
  {
    kind: "ML PROJECT",
    label: "RESEARCH & ML",
    categories: ["research"],
    year: "2024",
    title: "Movie Recommender",
    description:
      "Collaborative and content-based filtering on MovieLens in TensorFlow: about 5.9M parameters, 100 latent features.",
    tags: ["Python", "TensorFlow", "NumPy", "pandas"],
    link: "https://github.com/tahsinj/MovieRecomSystem",
  },
];
