// HOOK'S
import React from "react";

// COMPONENTS
import Card from "./Card/Card";

// REDUX

// CSS

// JAVASCRIP

function Cards({ recipes }) {
  return (
    <>
      {recipes.map(
        (
          {
            idRecipe,
            nameRecipe,
            imageRecipe,
            summary,
            healthScore,
            created,
            diets,
          },
          index
        ) => {
          return (
            <Card
              key={index}
              idRecipe={idRecipe}
              nameRecipe={nameRecipe}
              imageRecipe={imageRecipe}
              summary={summary}
              healthScore={healthScore}
              created={created}
              diets={diets}
            />
          );
        }
      )}
    </>
  );
}

export default Cards;
