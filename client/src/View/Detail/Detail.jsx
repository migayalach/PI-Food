// HOOK'S
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Card from "../../Components/Card/Card";

// REDUX
import { getRecipeId } from "../../Redux/actions";

// CSS

// JAVASCRIP

function Detail() {
  const dispatch = useDispatch();
  const { idRecipe } = useParams();
  const selectAux = useSelector((state) => state.aux);

  useEffect(() => {
    dispatch(getRecipeId(idRecipe));
  }, []);

  if (!selectAux || Object.keys(selectAux).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card
        idRecipe={idRecipe}
        nameRecipe={selectAux.nameRecipe}
        imageRecipe={selectAux.imageRecipe}
        summary={selectAux.summary}
        healthScore={selectAux.healthScore}
        created={selectAux.created}
        diets={selectAux.diets}
        detail={true}
      />
    </>
  );
}

export default Detail;
