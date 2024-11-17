import React, { useState, useEffect } from "react";
import logo from "../assets/logo-rmBg.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../components/nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkToken = () => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  };
  useEffect(() => {
    checkToken();
    window.addEventListener("storage", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login"); // Redirect to the login page after logout
  };

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
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
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
                window.location.href = "/#LastVideo";
              }}
            >
              Posledni video
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
          {loggedIn ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login" onClick={Logout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
