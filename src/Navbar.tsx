import React, { useState } from "react";
import { FaPhone, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="navbar-brand">Blonmmvlies'"</div>

      
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>

        
        <div className="navbar-icons-mobile">
          <FaSearch className="icon" />
          <FaPhone className="icon phone-icon" />
          <button className="navbar-btn">Sign Up</button>
        </div>
      </ul>

      
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaPhone className="icon phone-icon" />
        <button className="navbar-btn">Sign Up</button>
      </div>

      
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
