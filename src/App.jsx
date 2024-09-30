import { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InformationGrid from "./pages/InformationGrid";
import Maps from "./pages/Maps";
import White from './components/White';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const homeSection = document.getElementById('home');
      const homeSectionHeight = homeSection.offsetHeight;

      // Mostrar/ocultar navbar
      setIsNavbarVisible(currentScrollY > homeSectionHeight - 50);

      // Controlar la visibilidad de Home
      if (currentScrollY > lastScrollY && currentScrollY > homeSectionHeight - 50) {
        setScrollingDown(true);
        setIsHomeVisible(false); // Scroll hacia abajo
      } else if (currentScrollY < lastScrollY) {
        setScrollingDown(false);
        setIsHomeVisible(true); // Scroll hacia arriba
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Navbar isVisible={isNavbarVisible} />
      <Home isVisible={isHomeVisible} scrollingDown={scrollingDown} />
      <White />
      <Contact />
      <InformationGrid />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
