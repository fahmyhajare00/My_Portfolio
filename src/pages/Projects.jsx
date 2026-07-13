import { Cpu } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Jewelry from './Jewelry.png';
import Bijouya from './Bijouya.png';
import BeldiRoyal from './BeldiRoyal.png';
import handCity from './handCity.png';
import GesEmpl from './GesEmpl.png';

function Projects() {
  const projects = [
    {
      title: "Jewelry",
      description: "Site statique moderne pour bijoux.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      img: Jewelry,
      link: "https://www.google.com", // <-- Remplacez par le vrai lien du site
    },
    {
      title: "Bijouya",
      description: "Site statique pour bijoux traditionnels marocains",
      tech: ["HTML5", "CSS3"],
      img: Bijouya,
    },
    {
      title: "BeldiRoyal",
      description: "Site statique présentant des plats marocains",
      tech: ["HTML5", "CSS3"],
      img: BeldiRoyal,
    },
    {
      title: "HandCity",
      description: "HandCity est une plateforme web qui facilite la vie des citoyens en regroupant les services locaux, les événements, le signalement des problèmes urbains et la promotion du tourisme.",
      tech: ["React.js", "CSS3", "JavaScript","Laravel"],
      img: handCity,
    },
    {
      title: "GesEmpl",
      description: "Plateforme web de gestion des emplois du temps pour le CMC BM.",
      tech: ["React.js", "Laravel"],
      img: GesEmpl,
    },
    {
      title: "FootManager",
      description: "FootManager est une application web de gestion des équipes de football permettant de gérer les joueurs, les équipes et les statistiques avec une architecture conteneurisée via Docker.",
      tech: ["Web", "Docker", "Architecture Conteneurisée"],
      img: GesEmpl, // TODO: Remplacez par l'image de FootManager (ex: FootManagerImg)
      // video: FootManagerVideo, // TODO: Ajoutez l'import vidéo quand elle sera prête
    },
  ];

  return (
    <section id="projects" className="projects-section reveal">
      <h2 style={{color:"black",textAlign:"center",fontSize:"40px",marginTop:"5px"}}>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;