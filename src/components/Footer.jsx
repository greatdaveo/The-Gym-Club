import React from "react";
import "../styles/Footer.css";
import GitHub from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr />
      <div className="footer-items">
        <div className="footer-icons">
          <img src={GitHub} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>

        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
