import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      {/* <Link to="/home">Home</Link>
      <Link to="/create">Form</Link> */}
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
