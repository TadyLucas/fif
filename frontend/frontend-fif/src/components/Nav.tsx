import React from "react";
import logo from '../assets/logo-rmBg.png'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../components/nav.css"
import { Link, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'



const nav = () => {
  return (
    <nav className=" navbar-light">
      <div className="nav-left">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="links">
  <ul>
    <li><a href="#Home" onClick={(e) => {
      e.preventDefault();
      window.location.href = "/#Home";
    }}>Domov</a></li>
    <li><a href="#About" onClick={(e) => {
      e.preventDefault();
      window.location.href = "/#About";
    }}>O nás</a></li>
    <li><a href="#Subscription" onClick={(e) => {
      e.preventDefault();
      window.location.href = "/#Subscription";
    }}>Předplatné</a></li>
    <li><a href="#SocialMedia" onClick={(e) => {
      e.preventDefault();
      window.location.href = "/#SocialMedia";
    }}>Kontakt</a></li>
  </ul>
</div>
     </div>
     <div className="links">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
     </div>
    </nav>
  );
};

export default nav;
