import React, { useState } from 'react';

function ProjectCard({ title, description, tech, img }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="project-card" onClick={() => setIsOpen(true)}>
        <div className="project-image-container">
          <img src={img} alt={title} className="project-img" />
          <div className="project-overlay">
            <h4 className="project-preview-title">{title}</h4>
            <div className="hover-indicator">
              <span>Voir les détails</span>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="project-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsOpen(false)}>×</button>
            <div className="modal-image">
              <img src={img} alt={title} />
            </div>
            <div className="modal-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-tech">
                {tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;