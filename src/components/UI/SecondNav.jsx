import { useState, useEffect } from "react";
import classSecondNav from "./style/SecondNav.module.css";
export default function SecondNav() {

      const [marginTop, setMarginTop] = useState(130); // Il tuo margine iniziale (es. altezza navbar)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const altezzaNavbar = 130; // Sostituisci con l'altezza reale della tua barra gialla
      
      // Calcoliamo il nuovo margine: parte da 80 e scende fino a 0 man mano che scrolli
      const nuovoMargine = Math.max(50, altezzaNavbar - scrollY);
      
      setMarginTop(nuovoMargine);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



    return (
        <nav className={classSecondNav.secondNav} style={{ marginTop: `${marginTop}px` }} >
            <h4>SecondNav</h4>
        </nav>
    );
} 