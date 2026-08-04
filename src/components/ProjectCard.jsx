import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function ProjectCard({ title, description, tech, img, video, link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="project-card-text" onClick={(e) => { e.preventDefault(); setIsOpen(true); }}>
        <div className="project-card-inner">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-desc">{description}</p>
          <div className="project-card-tech-mini">
            {tech.slice(0, 3).map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-details" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
              Visiter le site
            </a>
          ) : (
            <button 
              type="button" 
              className="btn-details" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              Plus de détails
            </button>
          )}
        </div>
      </div>

      {isOpen && createPortal(
        <div className="project-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsOpen(false)}>×</button>
            <div className="modal-media">
              {video ? (
                <video src={video} controls autoPlay className="project-video"></video>
              ) : (
                <img src={img} alt={title} className="fallback-img" />
              )}
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
        </div>,
        document.body
      )}
    </>
  );
}

export default ProjectCard;