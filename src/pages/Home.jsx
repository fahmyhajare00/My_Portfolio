function Home() {
  return (
    <section id="home" className="home-section">
      <div className="intro">
        <h1>Fahmy Hajare  | Développeur Web Full-Stack</h1>
        <p>
          "Architecte de solutions numériques, je conçois des applications web complètes, 
          de l'interface utilisateur interactive à la gestion de bases de données complexes. 
          Ma maîtrise de l'écosystème moderne <span className="highlight">HTML5</span>, <span className="highlight">CSS3</span>, 
          <span className="highlight">JavaScript</span>, <span className="highlight">React.js</span>, pour le front-end, 
          couplée à la puissance de <span className="highlight">PHP</span>,<span className="highlight">Laravel</span> et <span className="highlight">MySQL</span>. pour le back-end — me permet de bâtir des 
          projets performants, sécurisés et évolutifs."
        </p>
        <a href="#projects" className="btn-primary">Voir mes projets</a>
      </div>
    </section>
  );
}

export default Home;