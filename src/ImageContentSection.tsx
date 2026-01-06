import React from "react";
import { useState } from "react";
import Button from "./Button.tsx";
import "./App.css";

interface ImageContentSectionProps {
  image: string;
  subtitle?: string;
  title?: string;
  paragraph?: string;
  buttonText?: string;
  buttonClass: string;
}

const ImageContentSection: React.FC<ImageContentSectionProps> = ({
  image,
  subtitle,
  title,
  paragraph,
  buttonText,
  buttonClass,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={title ? "hero" : "picture-section"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title ? "Hero" : "Picture Section"}
        className={isHovered ? "hovered" : ""}
      />
      <div className={title ? "hero-content" : "picture-content"}>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {title && <h1 className={title ? "hero-title" : "picture-title"}>{title}</h1>}
        {paragraph && <p className="hero-paragraph">{paragraph}</p>}
        {buttonText && <Button className={buttonClass} text={buttonText} />}
      </div>
    </section>
  );
};

export default ImageContentSection;