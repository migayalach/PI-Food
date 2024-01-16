// HOOK'S
import React from "react";
import { NavLink } from "react-router-dom";

// COMPONENTS

// REDUX

// CSS

// JAVASCRIP

function NavBar() {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="form">Create</NavLink>
      </li>

      <li>
        <NavLink to="favorite">Favorite</NavLink>
      </li>
      <li>Salir</li>
    </ul>
  );
}

export default NavBar;
