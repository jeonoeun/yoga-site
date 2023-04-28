import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const isActive = ({ isActive }) => (isActive ? "active" : "");
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-list">
          <li>
            <NavLink className={isActive} to="/">
              Index
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/types">
              Types
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
