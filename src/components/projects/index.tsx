import React from "react";
import { migueis, parOuImpar, passmonki, slidePuzzle } from "../../images";
import "./style.css";

const PROJECTS = [
  {
    name: "Passmonki - Cofre de senhas",
    preview: passmonki,
    url: "https://passmonki.autoseg.com",
    description:
      "O Passmonki foi o primeiro projeto realmente complexo onde trabalhei, com sua criptografia RSA e um modo de trabalhar com a criação de informações apenas do lado do front-end foi realmente um momento de grande aprendizado.",
  },
  {
    name: "Migueis API",
    preview: migueis,
    url: "https://github.com/Gu7z/migueis-api",
    description:
      "A API do Migueis restaurantes foi um projeto em conjunto da UFMS e do Restaurante em si para um prototipo de como seria um sistema de integração de pedidos digitais dentro das dependencias do local.",
  },
  {
    name: "Slide Puzzle - Game",
    preview: slidePuzzle,
    url: "https://github.com/Gu7z/SlidePuzzle",
    description:
      'O Jogo "Slide Puzzle" é bem antigo e um dos meu jogos favoritos. Como forma de estudo, utilizei ele para entender conceitos de css e também conhecer mais sobre os serviços da Vercel.',
  },
  {
    name: "Par ou Impar - Game",
    preview: parOuImpar,
    url: "https://github.com/Gu7z/par-ou-impar",
    description:
      "Par ou Impar é um jogo clássico! Na época eu estava tentando entender melhor como funcionava conexão em tempo real no NodeJS, nada melhor do que um jogo tão famoso!",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      {PROJECTS.map(({ name, preview, url, description }) => (
        <div className="cards">
          <a href={url} className="project" target="_blank" rel="noreferrer">
            <h3>{name}</h3>
            <img src={preview} alt={`Projeto ${name}`} />
            <p>{description}</p>
          </a>
        </div>
      ))}
    </>
  );
};

export default Projects;
