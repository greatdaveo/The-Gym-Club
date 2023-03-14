import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="The Logo" />

      <ul className="nav-links">
        <li>Home</li>
        <li>Programs</li>
        <li>Plans</li>
        <li>Why use</li>
        <li>Testimonials</li>
      </ul>
    </header>
  );
};

export default Header;
