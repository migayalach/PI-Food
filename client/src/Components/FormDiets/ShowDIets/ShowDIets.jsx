// HOOK'S
import React from "react";

// COMPONENTS
import ButtonDelete from "../../ButtonDelete/ButtonDelete";

// REDUX

// CSS

// JAVASCRIP

function ShowDIets({ dataDiets, removeDiet }) {
  return (
    <div className="container-diets">
      {dataDiets.map(({ idDiet, nameDiet }, i) => (
        <div key={i}>
          {nameDiet} <ButtonDelete idDiet={idDiet} removeDiet={removeDiet} />
        </div>
      ))}
    </div>
  );
}

export default ShowDIets;
