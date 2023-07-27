import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../Redux/actions";

const NavBar = ({ onSearch, logout }) => {
  const dispatch = useDispatch();
  const saludo = () => {
    dispatch(getRecipes());
  };

  return (
    <div>
      <SearchBar />
      <button onClick={saludo}>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/form">Crear una receta nueva</NavLink>
      </button>
      <button>
        <NavLink to="/favorites"> Favoritos </NavLink>
      </button>
      <button>
        <NavLink to="/">Salir</NavLink>
      </button>
    </div>
  );
};

export default NavBar;
