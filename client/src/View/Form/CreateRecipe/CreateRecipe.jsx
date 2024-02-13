// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// COMPONENTS
import ConteinerForm from "../../../Components/FormDiets/ConteinerForm/ConteinerForm";
import ButtonSuccess from "../../../Components/ButtonSuccess/ButtonSuccess";

// REDUX
import { getAllDiets, postRecipe } from "../../../Redux/actions";

// CSS

// JAVASCRIP

function CreateRecipe() {
  const successGlobal = useSelector((state) => state.success);
  const dispatch = useDispatch();
  const navigation = useHistory();
  const [recipe, setRecipe] = useState({
    nameRecipe: "",
    imageRecipe: "",
    summary: "",
    healthScore: 0,
    created: true,
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
    dispatch(postRecipe(recipe));
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  useEffect(() => {
    if (successGlobal) {
      navigation.push("/home");
    }
  }, [successGlobal]);

  return (
    <form onSubmit={handleSendRecipe}>
      <div>
        <label htmlFor="name-recipe">Name recipe</label>
        <input type="text" name="nameRecipe" onChange={handleFormRecipe} />
      </div>
      <div>
        <label htmlFor="image">Image recipe</label>
        <input type="text" name="imageRecipe" onChange={handleFormRecipe} />
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
