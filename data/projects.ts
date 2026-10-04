export type Tab = "top" | "quant" | "research" | "ml" | "all";

export type Project = {
  id: string;
  tabs: Tab[];
  kind: string;
  label: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

// Featured write-ups have their own components; these ids place them in the tabs.
export const featured: { id: "statArb" | "noSql"; tabs: Tab[] }[] = [
  { id: "statArb", tabs: ["top", "quant", "all"] },
  { id: "noSql", tabs: ["top", "research", "all"] },
];

export const projects: Project[] = [
  {
    id: "pokemon-assistant",
    tabs: ["top", "all"],
    kind: "SIDE PROJECT",
    label: "ENGINEERING",
    year: "2026",
    title: "Pokémon Assistant",
    description:
      "Desktop companion for open-world Pokémon games built on the Cobblemon mod: team builder, damage and KO-odds calculator, and a live battle tracker fed by a Fabric mod over a local WebSocket.",
    tags: ["Electron", "React", "TypeScript", "WebSocket", "Vitest"],
  },
  {
    id: "text-to-sql",
    tabs: ["research", "ml", "all"],
    kind: "DIRECTED STUDIES",
    label: "RESEARCH",
    year: "2025",
    title: "Text-to-SQL with GPT",
    description:
      "Compared prompting strategies for GPT-3.5 on a real Oracle database. Few-shot prompting with similar question–SQL pairs reached 70% accuracy, double SQLCoder's 34%, for under $0.50 a run.",
    tags: ["Python", "LangChain", "OpenAI", "Oracle"],
    link: "https://github.com/tahsinj/Text2SQL",
  },
  {
    id: "movie-recommender",
    tabs: ["ml", "all"],
    kind: "ML PROJECT",
    label: "ML",
    year: "2024",
    title: "Movie Recommender",
    description:
      "Collaborative and content-based filtering on MovieLens in TensorFlow, with about 5.9M parameters and 100 learned features per user and movie.",
    tags: ["Python", "TensorFlow", "NumPy", "pandas"],
    link: "https://github.com/tahsinj/MovieRecomSystem",
  },
  {
    id: "skin-cancer",
    tabs: ["ml", "all"],
    kind: "ML PROJECT",
    label: "ML",
    year: "2024",
    title: "Skin Cancer Classification",
    description:
      "Convolutional neural network that labels skin-lesion photos as benign or malignant, trained on about 26,000 images from the ISIC 2020 dataset.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    link: "https://github.com/tahsinj/SkinCancerClassification",
  },
  {
    id: "discord-clone",
    tabs: ["all"],
    kind: "TEAM PROJECT",
    label: "ENGINEERING",
    year: "2024",
    title: "Discord Clone",
    description:
      "Real-time chat app built by a team for a software engineering course: dockerized, with Clerk auth and CI/CD.",
    tags: ["Next.js", "TypeScript", "Docker", "Jest"],
    link: "https://github.com/tahsinj/DiscordClone",
  },
  {
    id: "grocery",
    tabs: ["all"],
    kind: "TEAM PROJECT",
    label: "ENGINEERING",
    year: "2024",
    title: "Online Grocery Store",
    description:
      "Database course project: a grocery storefront with accounts, cart and checkout, plus an admin panel for products, orders, shipping and warehouses.",
    tags: ["Java", "SQL", "HTML", "CSS"],
    link: "https://github.com/tahsinj/MoodiJawoodiGrocery",
  },
  {
    id: "url-shortener",
    tabs: ["all"],
    kind: "SIDE PROJECT",
    label: "ENGINEERING",
    year: "2024",
    title: "URL Shortener",
    description: "Django app that turns long links into short ones and redirects visitors to the original address.",
    tags: ["Python", "Django"],
    link: "https://github.com/tahsinj/URLShortener",
  },
];
