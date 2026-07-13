import Logomee from "../Logomee.png";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  
  return (
    <nav>
      <div className="nav-container">
        <div className="logo" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--text-primary)", letterSpacing: "1px" }}>
          &lt;H.F /&gt;
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setOpen(false)}>À propos</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projets</a>
          <a href="#skills" onClick={() => setOpen(false)}>Compétences</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        
        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1.4rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.3s' }}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          
          <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer" className="btn-cv">CV</a>
          <div className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <div style={{ backgroundColor: 'var(--text-primary)' }}></div>
            <div style={{ backgroundColor: 'var(--text-primary)' }}></div>
            <div style={{ backgroundColor: 'var(--text-primary)' }}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;