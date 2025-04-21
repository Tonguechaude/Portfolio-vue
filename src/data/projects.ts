export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Mon Portfolio",
    description: "Un site perso pour montrer mes projets",
    tags: ["Vue", "Tailwind", "TypeScript"],
    image: "/img/portfolio.png",
    link: "https://github.com/tonportfolio",
  },
  {
    title: "API NodeJS",
    description: "Une API REST avec Express et MongoDB",
    tags: ["Node", "Express", "MongoDB"],
    image: "/img/api.png",
    link: "https://github.com/tonapi",
  },
  {
    title: "Jeu Canvas",
    description: "Petit jeu HTML5 avec Canvas",
    tags: ["JavaScript", "Canvas"],
    image: "/img/jeu.png",
    link: "https://github.com/tonjeu",
  },
];
