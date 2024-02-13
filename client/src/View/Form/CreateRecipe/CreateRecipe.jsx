// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import ConteinerForm from "../../../Components/FormDiets/ConteinerForm/ConteinerForm";
import ButtonSuccess from "../../../Components/ButtonSuccess/ButtonSuccess";

// REDUX
import { getAllDiets } from "../../../Redux/actions";

// CSS

// JAVASCRIP

function CreateRecipe() {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({
    nameRecipe: "",
    image: "",
    summary: "",
    healthScore: 0,
    diets: [],
  });

  const handleFormRecipe = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleHookDiets = (dataArray) => {
    setRecipe({ ...recipe, diets: dataArray });
  };

  const handleSendRecipe = (event) => {
    event.preventDefault();
    alert("enviando");
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  return (
    <form onSubmit={handleSendRecipe}>
      <div>
        <label htmlFor="name-recipe">Name recipe</label>
        <input type="text" name="nameRecipe" onChange={handleFormRecipe} />
      </div>
      <div>
        <label htmlFor="image-recipe">Image recipe</label>
        <input type="text" name="image" onChange={handleFormRecipe} />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea
          type="text"
          name="summary"
          onChange={handleFormRecipe}
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <div>
        <label htmlFor="health-score">HealthScore</label>
        <input type="number" name="healthScore" onChange={handleFormRecipe} />
      </div>
      <ConteinerForm handleHookDiets={handleHookDiets} />
      <ButtonSuccess text="Send" action="createRecipe" type="submit" />
    </form>
  );
}

export default CreateRecipe;
