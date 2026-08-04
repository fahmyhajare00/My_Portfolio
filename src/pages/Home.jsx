import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="intro">
        <h1><span className="highlight">Fahmy Hajare</span> | Développeuse Web Full-Stack</h1>
        <p>
          Architecte de solutions numériques, je conçois des applications web complètes, 
          de l'interface utilisateur interactive à la gestion de bases de données complexes. 
          Ma maîtrise de l'écosystème moderne <span className="highlight">HTML5</span>, <span className="highlight">CSS3</span>, 
          <span className="highlight">JavaScript</span>, <span className="highlight">React.js</span>, pour le front-end, 
          couplée à la puissance de <span className="highlight">PHP</span>, <span className="highlight">Laravel</span> et <span className="highlight">MySQL</span> pour le back-end — me permet de bâtir des 
          projets performants, sécurisés et évolutifs.
        </p>
        <div className="home-actions" style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">Voir mes projets</a>
          <a href={`${import.meta.env.BASE_URL}CV_FAHMY_Hajare.pdf`} target="_blank" rel="noopener noreferrer" className="btn-cv" style={{ padding: '16px 40px', fontSize: '1.1rem', borderRadius: '50px' }}>
            Télécharger mon CV
          </a>
        </div>
        
        <div className="home-socials" style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <a href="https://github.com/fahmyhajare00" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '2.2rem', transition: 'all 0.3s' }}>
            <FaGithub className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/fahmy-hajare" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '2.2rem', transition: 'all 0.3s' }}>
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;