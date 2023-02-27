import React from "react";
import {  NavLink } from "react-router-dom";
import "./navStyle.css";

const Navbar = () => {


  return (
    <>
      <ul className="nav__container">
        <li>Logo</li>
        <li>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/user-table">
            User table
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/user-card-view">
            Card view
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
