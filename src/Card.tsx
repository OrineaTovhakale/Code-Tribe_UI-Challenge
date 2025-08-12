import React from "react";
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
  return (
    <div className={`card ${reverse ? "reverse" : ""}`}>
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