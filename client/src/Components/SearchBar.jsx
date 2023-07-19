import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRec } from "../Redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState("");
  const handleChange = (event) => {
    setRecipe(event.target.value);
  };

  const callback = () => {
    dispatch(searchRec(recipe));
    setRecipe("");
  };

  return (
    <div>
      <input type="seach" onChange={handleChange} value={recipe} />
      <button onClick={callback}>Buscar</button>
    </div>
  );
};

export default SearchBar;
