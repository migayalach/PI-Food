// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS

// REDUX
import { getAllDiets } from "../../../Redux/actions";

// CSS

// JAVASCRIP

function CreateRecipe() {
  const dispatch = useDispatch();
  const selectDiets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="name-recipe">Name recipe</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="image-recipe">Image recipe</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea name="summary" rows="4" cols="50"></textarea>
      </div>
      <div>
        <label htmlFor="health-score">HealthScore</label>
        <input type="number" />
      </div>
      <div>
        <label htmlFor="diets">Diets</label>
        <select name="" value="" onChange="">
          <option value=""></option>
          {selectDiets.map(({ idDiet, nameDiet }, index) => (
            <option key={index} value={idDiet}>
              {nameDiet}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default CreateRecipe;
