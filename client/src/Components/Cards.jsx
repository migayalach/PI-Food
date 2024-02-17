// HOOK'S
import React from "react";

// COMPONENTS
import CardComponent from "./CardComponent/CardComponent";

// REDUX

// CSS
import "./../StyleSheets/cards.css";

// JAVASCRIP

function Cards({ recipes }) {
  return (
    // "
    <div className="conteiner-cards">
      {recipes?.map(
        ({ idRecipe, nameRecipe, imageRecipe, healthScore }, index) => {
          return (
            <CardComponent
              key={index}
              idRecipe={idRecipe}
              nameRecipe={nameRecipe}
              imageRecipe={imageRecipe}
              healthScore={healthScore}
            />
          );
        }
      )}
    </div>
  );
}

export default Cards;
