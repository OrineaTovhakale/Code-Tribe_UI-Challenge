import React from "react";
import Button from "./Button"; 
import "./app.css";

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
  return (
    <section className={title ? "hero" : "picture-section"}>
      <img src={image} alt={title ? "Hero" : "Picture Section"} />
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