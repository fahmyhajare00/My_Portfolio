import { Cpu } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import JewelryVideo from './Jewelry.mp4';
import Bijouya from './Bijouya.png';
import BeldiRoyalVideo from './Beldi Royal .mp4';
import handCityVideo from './HandCityy.mp4';
import GesEmplVideo from './GesEmpll.mp4';
import FootManagerVideo from './FootManager.mp4';

function Projects() {
  const projects = [
    {
      title: "Jewelry",
      description: "Site statique moderne pour bijoux.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      video: JewelryVideo,
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
      video: BeldiRoyalVideo,
    },
    {
      title: "HandCity",
      description: "HandCity est une plateforme web qui facilite la vie des citoyens en regroupant les services locaux, les événements, le signalement des problèmes urbains et la promotion du tourisme.",
      tech: ["React.js", "CSS3", "JavaScript","Laravel"],
      video: handCityVideo,
    },
    {
      title: "GesEmpl",
      description: "Plateforme web de gestion des emplois du temps pour le CMC BM.",
      tech: ["React.js", "Laravel"],
      video: GesEmplVideo,
    },
    {
      title: "FootManager",
      description: "FootManager est une application web de gestion des équipes de football permettant de gérer les joueurs, les équipes et les statistiques avec une architecture conteneurisée via Docker.",
      tech: ["Web", "Docker", "Architecture Conteneurisée"],
      video: FootManagerVideo,
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