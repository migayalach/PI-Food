import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
    </div>
  );
};

export default NavBar;
