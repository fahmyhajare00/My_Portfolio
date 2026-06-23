import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Développement Sur Mesure",
      icon: <FaCode />,
      description: "Création d'applications web performantes, responsives et entièrement adaptées à vos besoins spécifiques."
    },
    {
      title: "Design & UX/UI",
      icon: <FaPaintBrush />,
      description: "Conception d'interfaces modernes et intuitives offrant une excellente expérience utilisateur sur tous les écrans."
    },
    {
      title: "Intégration & APIs",
      icon: <FaServer />,
      description: "Connexion de vos services avec des bases de données sécurisées et intégration d'outils externes complexes."
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2>Mes Services</h2>
      <p className="section-subtitle">Des solutions sur mesure pour concrétiser vos projets web.</p>
      
      <div className="services-container">
        {services.map((srv, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{srv.icon}</div>
            <h3>{srv.title}</h3>
            <p>{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
