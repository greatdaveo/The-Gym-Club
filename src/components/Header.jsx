import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";

import "../styles/Header.css";

const Header = () => {
  const screenSize = window.innerWidth <= 768 ? true : false;
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <img className="logo" src={Logo} alt="The Logo" />
      {mobileMenu === false && screenSize === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="nav-links">
          <li>
            <Link
              onClick={handleMenu}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" spy={true} smooth={true} onClick={handleMenu}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="plans" spy={true} smooth={true} onClick={handleMenu}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="reasons" spy={true} smooth={true} onClick={handleMenu}>
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileMenu(!mobileMenu)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
