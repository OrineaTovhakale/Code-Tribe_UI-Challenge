// src/Icon.tsx
import React from "react";
import type { IconType } from "react-icons"; // Install if needed: npm install react-icons
 // Install if needed: npm install react-icons

interface IconProps {
  IconComponent: IconType;
  className?: string;
  onClick?: () => void; // For future interactivity
}

const Icon: React.FC<IconProps> = ({ IconComponent, className, onClick }) => {
  return <IconComponent className={className} onClick={onClick} />;
};

export default Icon;