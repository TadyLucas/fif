import React from "react";
import logo from '../assets/logo-rmBg.png'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../components/nav.css"

const nav = () => {
  return (
    <nav className=" navbar-light">
      <div className="nav-left">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <ul>
          <li><a href="#Home">Domov</a></li>
          <li><a href="#About">O nás</a></li>
          <li><a href="#Subscription">Předplatné</a></li>
          <li><a href="#Contact">Kontakt</a></li>
        </ul>
      </div>
     </div>
     <div className="links">
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
     </div>
    </nav>
  );
};

export default nav;
