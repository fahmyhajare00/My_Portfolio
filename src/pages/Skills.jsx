function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      title: "Backend & DB",
      skills: ["PHP", "Laravel", "Python", "MySQL", "MongoDB", "Oracle"]
    },
    {
      title: "Outils & Méthodes",
      skills: ["GIT/GitHub", "Node.js", "Jira", "Agile/SCRUM"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Mes Compétences</h2>
      <div className="skills-bento-grid">
        {categories.map((cat, index) => (
          <div key={index} className={`skills-card card-${index}`}>
            <div className="skills-card-header">
              <h3>{cat.title}</h3>
            </div>
            <div className="skills-grid">
              {cat.skills.map((skillName, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-name">{skillName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;