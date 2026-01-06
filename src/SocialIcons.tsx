import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css";
import Icon from "./Icon";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
       <Icon IconComponent={FaFacebook} className="social-icon" />
       <Icon IconComponent={FaTwitter} className="social-icon" />
       <Icon IconComponent={FaInstagram} className="social-icon" />
       <Icon IconComponent={FaLinkedin} className="social-icon" />
    </div>
  );
};

export default SocialIcons;