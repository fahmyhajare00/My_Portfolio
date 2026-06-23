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
  ];

  return (
    <section id="projects" className="projects-section">
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