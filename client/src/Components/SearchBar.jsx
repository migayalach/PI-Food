import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRec, getDiets, orderDiets } from "../Redux/actions";

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

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const diets = useSelector((diet) => diet.diets);

  const handleChangeDiets = (event) => {
    const diet = event.target.value;
    dispatch(orderDiets(diet));
  };

  return (
    <div>
      <input type="seach" onChange={handleChange} value={recipe} />
      <button onClick={callback}>Buscar</button>
      <label htmlFor="dieta">Selecciona una dieta: </label>
      <select name="dieta" onChange={handleChangeDiets}>
        <option></option>
        {diets.map(({ id, name }) => (
          <option key={id} value={name} onChange={handleChangeDiets}>
            {name}
          </option>
        ))}
      </select>

      <button>Filtart por API - BDD</button>

      <button>Ordenar A - Z</button>
      <button>Ordenar Z - A</button>
      <button>Health source</button>
    </div>
  );
};

export default SearchBar;
