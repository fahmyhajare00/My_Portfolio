import { Cpu } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Jewelry from '../pages/Jewelry.png';
import Bijouya from '../pages/Bijouya.png';
import BeldiRoyal from '../pages/BeldiRoyal.png';
import handCity from '../pages/handCity.png';
import GesEmpl from '../pages/GesEmpl.png';

function Projects() {
  const projects = [
    {
      title: "Jewelry",
      description: "Site statique moderne pour bijoux, HTML5 + CSS3 + Bootstrap",
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
      description: "Plateforme web en cours avec React.js et Laravel",
      tech: ["React.js", "CSS3", "JavaScript","Laravel"],
      img: handCity,
    },
    {
      title: "GesEmpl",
      description: "Plateforme web en cours avec React.js et Laravel",
      tech: ["React.js", "Laravel"],
      img: handCity,
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