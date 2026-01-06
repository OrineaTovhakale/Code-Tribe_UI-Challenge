import React, { useState } from "react";
import { FaPhone, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./App.css";
import Link from "./Link";
import Icon from "./Icon";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="navbar-brand">Blonmmvlies'"</div>

      
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link href="#" text="Home" /></li>
        <li><Link href="#" text="About" /></li>
        <li><Link href="#" text="Services" /></li>
        <li><Link href="#" text="Contact" /></li>
                
        <div className="navbar-icons-mobile">
         <Icon IconComponent={FaSearch} className="icon" />
         <Icon IconComponent={FaPhone} className="icon phone-icon" />
          <button className="navbar-btn">Sign Up</button>
        </div>
      </ul>

      
      <div className="navbar-right">
        <Icon IconComponent={FaSearch} className="icon" />
        <Icon IconComponent={FaPhone} className="icon phone-icon" />
        <Icon IconComponent={FaSearch} className="icon" onClick={() => alert("Search functionality coming soon!")} />
        <button className="navbar-btn">Sign Up</button>
      </div>

      
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
