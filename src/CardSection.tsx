import React from "react";
import "./CardSection.css";
import img1 from "./assets/image2.png";
import img2 from "./assets/image3.png";
import Card from "./Card.tsx"; 

const CardSection: React.FC = () => {
  return (
    <div className="card-section">
      <Card
        title="beste ideer Våre egne stoler"
        paragraph="Våre egne stoler, komfortable og stilrene, designet for å gi deg det beste ut av deg selv og sette fart på de kreative kreftene for optimale resultater. Blomstene og vasene som gir et friskt pust for både programmerere og kreative sjeler – skapt for å gi deg det beste utsynet for å realisere dine aller beste ideer."
        primaryButtonText="Enter Bay"
        secondaryButtonText="Explore"
        image={img1}
        reverse={false}
      />
      <Card
        title="Peluc ondbeste ideer"
        paragraph="Våre egne stoler, komfortable og stilrene, designet for å gi deg det beste ut av deg selv og sette fart på de kreative kreftene for optimale resultater. Blomstene og vasene som gir et friskt pust for både programmerere og kreative sjeler – skapt for å gi deg det beste utsynet for å realisere dine aller beste ideer."
        primaryButtonText="Enter"
        secondaryButtonText="Buy"
        image={img2}
        reverse={true}
      />
    </div>
  );
};

export default CardSection;