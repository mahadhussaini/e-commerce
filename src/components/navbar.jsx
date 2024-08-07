import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          aria-label="Cart"
        >
          <ShoppingCart size={20} />
        </NavLink>
      </div>
    </nav>
  );
};
