import Logomee from "../Logomee.png";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="nav-container">
        <div className="logo" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--text-primary)", letterSpacing: "1px" }}>
          &lt;H.F /&gt;
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer" className="btn-cv">CV</a>
          <div className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;