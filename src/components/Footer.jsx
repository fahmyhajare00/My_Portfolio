import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const payload = {
      ...formData,
      access_key: "cc057642-2848-4851-8ef6-c0f388665d10"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("❌ Erreur lors de l'envoi.");
      }
    } catch (err) {
      setStatus("❌ Erreur réseau, veuillez réessayer.");
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-info">
            <h2>Travaillons Ensemble</h2>
            <p>Je suis actuellement à la recherche de nouvelles opportunités et ma boîte de réception est toujours ouverte. Que vous ayez une question ou simplement envie de dire bonjour, je ferai de mon mieux pour vous répondre !</p>
            <div className="contact-links-new">
              <a href="https://www.linkedin.com/in/HajareFahmy" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/fahmyhajare00" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:hajarefahmy4@gmail.com" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre email" required />
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Votre message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', borderRadius: '12px' }} disabled={status === "Envoi en cours..."}>
                {status === "Envoi en cours..." ? "Envoi..." : "Envoyer le message"}
              </button>
              {status && <p style={{ marginTop: '15px', textAlign: 'center', fontSize: '0.9rem', color: status.includes('✅') ? '#4ade80' : 'inherit' }}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 - Hajare Fahmy. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;