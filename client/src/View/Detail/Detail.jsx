// HOOK'S
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Cards from "../../Components/Cards";

// REDUX
import { getRecipeId } from "../../Redux/actions";

// CSS

// JAVASCRIP

function Detail() {
  const dispatch = useDispatch();
  const { idRecipe } = useParams();
  const selectRecipe = useSelector((state) => state.aux);

  useEffect(() => {
    dispatch(getRecipeId(idRecipe));
  }, [idRecipe]);

  return (
    <>
      <Cards recipes={selectRecipe} />
    </>
  );
}

export default Detail;
