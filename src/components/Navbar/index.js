import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const IonLogout = () => onLogout();
  return (
    <nav className="navbar">
      <h1>Invoice Management</h1>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/invoice-form">Create Invoice</NavLink>
            </li>
            <li>
              <button onClick={IonLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
