import Logomee from "../Logomee.png";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src={Logomee} alt="Logo" />
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
      <a href="#home">Accueil</a>
      <a href="#projects">Projets</a>
      <a href="#skills">Compétences</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="burger" onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</nav>
  );
}
export default Navbar;