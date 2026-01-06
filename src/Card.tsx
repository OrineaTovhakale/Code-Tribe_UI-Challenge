import React, { useState } from "react"; // Ensure useState is imported
import Button from "./Button.tsx"; 
import "./CardSection.css";

interface CardProps {
  title: string;
  paragraph: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  image: string;
  reverse: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  paragraph,
  primaryButtonText,
  secondaryButtonText,
  image,
  reverse,
}) => {
  const [isSelected, setIsSelected] = useState(false); // State for selected

  const handleClick = () => setIsSelected(!isSelected); // Handler (now used below)

  return (
    <div 
      className={`card ${reverse ? "reverse" : ""} ${isSelected ? "selected" : ""}`} 
      onClick={handleClick} // This uses handleClick, fixing the error
    >
      <div className="card-text">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <div className="card-buttons">
          <Button className="btn-primary" text={primaryButtonText} />
          <Button className="btn-secondary" text={secondaryButtonText} />
        </div>
      </div>
      <div className="card-image">
        <img src={image} alt="Card" />
      </div>
    </div>
  );
};

export default Card;