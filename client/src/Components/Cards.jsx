// HOOK'S
import React from "react";

// COMPONENTS
import CardComponent from "./CardComponent/CardComponent";

// REDUX

// CSS
import "./../StyleSheets/cards.css";

// JAVASCRIP

function Cards({ recipes, page }) {
  return (
    <div className="conteiner-cards">
      {recipes?.map(
        (
          { idRecipe, nameRecipe, imageRecipe, healthScore, favorite },
          index
        ) => {
          return (
            <CardComponent
              key={index}
              idRecipe={idRecipe}
              nameRecipe={nameRecipe}
              imageRecipe={imageRecipe}
              healthScore={healthScore}
              favorite={favorite}
              page={page}
            />
          );
        }
      )}
    </div>
  );
}

export default Cards;
