import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
      <h2 className="logo">Deepfake Detector</h2>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/detect">Detect</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}