import Logomee from "../Logomee.png";
function ProjectCard({ title, description, tech, img }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;