// src/Link.tsx
import React from "react";
import "./App.css"; // Assuming styles are in App.css; move if needed

interface LinkProps {
  href: string;
  text: string;
  className?: string; // Optional for custom styling
}

const Link: React.FC<LinkProps> = ({ href, text, className }) => {
  return (
    <a href={href} className={`reusable-link ${className || ""}`}>
      {text}
    </a>
  );
};

export default Link;