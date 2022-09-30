import { Link } from "react-router-dom";
import "./css/Navbar.css";
import Logo from "./assets/cc-logo.png";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../api/firebase";

function Navbar() {
  const [user] = useAuthState(auth);
  const isSignedin = user ? true : false;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img alt="CC Delivery" src={Logo} />
            </Link>
          </div>
        </div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/services">Service</Link>
          <Link to="/shop">Shop</Link>
          {!isSignedin && <Link to="/login">Login/Signup</Link>}
          {isSignedin && <Link to="/dashboard">Dashboard</Link>}
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
