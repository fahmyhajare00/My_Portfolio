function About() {
  return (
    <section id="about" className="about-section reveal" style={{ padding: '120px 40px', position: 'relative' }}>
      <h2 style={{ textAlign: "center", marginBottom: "70px", fontSize: "3rem", color: "var(--text-primary)" }}>À propos de moi</h2>
      <div className="about-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
        
        <div className="about-image" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="code-window" style={{ width: '100%', maxWidth: '450px', background: '#1e1e1e', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid #333' }}>
            <div className="code-header" style={{ display: 'flex', gap: '8px', padding: '12px 15px', background: '#2d2d2d', borderBottom: '1px solid #333' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <div className="code-content" style={{ padding: '25px 20px', color: '#e6e6e6', fontFamily: '"JetBrains Mono", Consolas, monospace', fontSize: '1rem', lineHeight: '1.7', overflowX: 'auto', textAlign: 'left' }}>
              <p><span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>developer</span> <span style={{ color: '#56b6c2' }}>=</span> {'{'}</p>
              <p style={{ paddingLeft: '20px' }}><span style={{ color: '#d19a66' }}>name</span>: <span style={{ color: '#98c379' }}>"Fahmy Hajare"</span>,</p>
              <p style={{ paddingLeft: '20px' }}><span style={{ color: '#d19a66' }}>role</span>: <span style={{ color: '#98c379' }}>"Full-Stack Developer"</span>,</p>
              <p style={{ paddingLeft: '20px' }}><span style={{ color: '#d19a66' }}>skills</span>: [<span style={{ color: '#98c379' }}>"React"</span>, <span style={{ color: '#98c379' }}>"Laravel"</span>, <span style={{ color: '#98c379' }}>"MySQL"</span>],</p>
              <p style={{ paddingLeft: '20px' }}><span style={{ color: '#d19a66' }}>passion</span>: <span style={{ color: '#98c379' }}>"Créer des expériences web uniques"</span></p>
              <p>{'}'};</p>
            </div>
          </div>
        </div>

        <div className="about-text" style={{ flex: '1 1 500px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--text-primary)' }}>Qui suis-je ?</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Je suis développeuse web full stack avec une bonne maîtrise de HTML, CSS, JavaScript, React, PHP et MySQL. J’aime concevoir des interfaces propres, modernes et faciles à utiliser.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Mon objectif est de créer des applications web performantes qui offrent une excellente expérience utilisateur tout en respectant les meilleures pratiques de développement.
          </p>
          <a href="#contact" className="btn-primary" style={{ padding: '12px 30px', fontSize: '1rem' }}>Me Contacter</a>
        </div>

      </div>
    </section>
  )
}
export default About