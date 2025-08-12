import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./app.css";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <FaFacebook className="social-icon" />
      <FaTwitter className="social-icon" />
      <FaInstagram className="social-icon" />
      <FaLinkedin className="social-icon" />
    </div>
  );
};

export default SocialIcons;