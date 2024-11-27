import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>El Computer Center</span>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar} aria-expanded={isOpen}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={closeNavbar}>
            Beranda
          </a>
        </li>
        <li>
          <a href="#program" onClick={closeNavbar}>
            Program
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeNavbar}>
            Tentang Kami
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeNavbar}>
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
