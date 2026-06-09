function Skills() {
  const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "PHP", "MySQL","Python","Laravel","Oracle"];
  return (
    <section id="skills" className="skills-section">
      <h2>Mes Compétences</h2>
      <ul className="skills">
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;