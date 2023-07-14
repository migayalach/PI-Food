import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch, logout }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/form">Crear una receta nueva</NavLink>
      </button>
      <button>
        <NavLink to="/">Salir</NavLink>
      </button>
    </div>
  );
};

export default NavBar;
