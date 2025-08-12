import React, { useState } from "react";
import { FaPhone, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./app.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-brand">Blonmmvlies'"</div>

      {/* Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>

        {/* Icons + Button (only in mobile dropdown) */}
        <div className="navbar-icons-mobile">
          <FaSearch className="icon" />
          <FaPhone className="icon phone-icon" />
          <button className="navbar-btn">Sign Up</button>
        </div>
      </ul>

      {/* Right section (large screens only) */}
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaPhone className="icon phone-icon" />
        <button className="navbar-btn">Sign Up</button>
      </div>

      {/* Hamburger Menu */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
