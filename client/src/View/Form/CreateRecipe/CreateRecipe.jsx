// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import ConteinerForm from "../../../Components/FormDiets/ConteinerForm/ConteinerForm";

// REDUX
import { getAllDiets } from "../../../Redux/actions";

// CSS

// JAVASCRIP

function CreateRecipe() {
  const dispatch = useDispatch();
  const selectDiets = useSelector((state) => state.diets);
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

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="name-recipe">Name recipe</label>
        <input
          type="text"
          // value={recipe.nameRecipe}
          name="nameRecipe"
          onChange={handleFormRecipe}
        />
      </div>
      <div>
        <label htmlFor="image-recipe">Image recipe</label>
        <input
          type="text"
          // value={recipe.image}
          name="image"
          onChange={handleFormRecipe}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea
          type="text"
          name="summary"
          // value={recipe.summary}
          onChange={handleFormRecipe}
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <div>
        <label htmlFor="health-score">HealthScore</label>
        <input
          type="number"
          name="healthScore"
          // value={recipe.healthScore}
          onChange={handleFormRecipe}
        />
      </div>
      <ConteinerForm />
    </form>
  );
}

export default CreateRecipe;
