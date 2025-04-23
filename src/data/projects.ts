export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Cube.rs",
    description: "Juste un cube qui tourne en Rust",
    tags: ["Rust", "Make", "Cargo"],
    image: "/img/cuberust.png",
    link: "https://github.com/Tonguechaude/cube.rs",
  },
  {
    title: "Jeu de la vie en Rust avec Bevy",
    description:
      "Implémentation du jeu de la vie de Conway en Rust avec Bevy et déployé sur WebAssembly",
    tags: ["Rust", "Bevy", "WASM"],
    image: "/img/gol.png",
    link: "https://github.com/Tonguechaude/GOL.rs",
  },
  {
    title: "Portfolio Tonguechaude",
    description: "Un site perso pour montrer mes projets",
    tags: ["Vue", "Tailwind", "TypeScript"],
    image: "/img/portfolio.png",
    link: "https://github.com/Tonguechaude/Portfolio-vue",
  },
];
