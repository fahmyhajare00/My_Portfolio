import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Services />
      <Footer />
      
      {showTopBtn && (
        <button className="back-to-top" onClick={goToTop} title="Retour en haut">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default App;