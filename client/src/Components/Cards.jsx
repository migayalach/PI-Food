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
          { id, title, image, summary, healthScore, instructions, diets },
          index
        ) => {
          return (
            <Card
              key={index}
              id={id}
              title={title}
              image={image}
              summary={summary}
              healthScore={healthScore}
              instructions={instructions}
              diets={diets}
            />
          );
        }
      )}
    </>
  );
}

export default Cards;
