import React, { useState } from "react";
import logo from "../assets/logo-rmBg.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../components/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-light">
      <div className="nav-left">
        <a href="/#Home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger menu icon */}
      </div>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a
              href="#Home"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#Home";
              }}
            >
              Domov
            </a>
          </li>
          <li>
            <a
              href="#About"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#About";
              }}
            >
              O nás
            </a>
          </li>
          <li>
            <a
              href="#Subscription"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#Subscription";
              }}
            >
              Předplatné
            </a>
          </li>
          <li>
            <a
              href="#SocialMedia"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#SocialMedia";
              }}
            >
              Kontakt
            </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
