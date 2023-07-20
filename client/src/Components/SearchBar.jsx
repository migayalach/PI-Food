import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchRec,
  getDiets,
  orderDiets,
  originApi,
  originCreate,
  getRecipes,
  orderScore,
  orderAZ,
  orderZA,
} from "../Redux/actions";

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
    if (diet !== "all" && diet !== "api" && diet !== "create") {
      dispatch(orderDiets(diet));
    } else if (diet === "api") {
      dispatch(originApi(diet));
    } else if (diet === "create") {
      dispatch(originCreate(diet));
    } else {
      dispatch(getRecipes());
    }
  };

  const handleChangeOrder = (event) => {
    const order = event.target.value;
    if (order === "healthScore") {
      dispatch(orderScore());
    } else if (order === "orderAZ") {
      dispatch(orderAZ(order));
    } else if (order === "orderZA") {
      dispatch(orderZA(order));
    } else {
      dispatch(getDiets());
    }
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
      <label htmlFor="selecBus">Selecciona tu busqueda</label>
      <select name="selectBus" onChange={handleChangeDiets}>
        <option></option>
        <option value="all">All</option>
        <option value="api">Api</option>
        <option value="create">Creados</option>
      </select>

      <label htmlFor="ordenar">Ordenar</label>
      <select name="ordenar" onChange={handleChangeOrder}>
        <option></option>
        <option value="orderAZ">Ordenar A - Z</option>
        <option value="orderZA">Ordenar Z - A</option>
        <option value="healthScore">Health source</option>
      </select>
    </div>
  );
};

export default SearchBar;
