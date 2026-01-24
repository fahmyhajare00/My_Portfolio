import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Footer() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Écoute le scroll pour savoir si on est dans le footer
    const handleScroll = () => {
      const footer = document.getElementById("contact");
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="contact" className="footer">
      <div className={`contact-links ${active ? "active" : ""}`}>
        <a
          href="https://www.linkedin.com/in/HajareFahmy"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/hajarefahmy00"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:hajarefahmy4@gmail.com" title="Email">
          <FaEnvelope />
        </a>
      </div>
      <p style={{color:"grey"}}>© 2026 - Mon Portfolio</p>
      {active && <div className="footer-line"></div>}
    </footer>
  );
}
export default Footer;