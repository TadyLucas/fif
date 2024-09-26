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
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
     </div>
     <div className="links">
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
      </ul>
     </div>
    </nav>
  );
};

export default nav;
