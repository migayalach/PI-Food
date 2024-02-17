// HOOK'S
import React from "react";

// COMPONENTS
import ButtonDelete from "../../ButtonDelete/ButtonDelete";

// REDUX

// LIBRARY

// CSS
import "./show-dIets.css";

// JAVASCRIP

function ShowDIets({ dataDiets, removeDiet }) {
  return (
    <div className="container-diets">
      <ul className="list-ul">
        {dataDiets.map(({ idDiet, nameDiet }, index) => (
          <li key={index} className="list-li">
            {nameDiet}
            <ButtonDelete
              idDiet={idDiet}
              removeDiet={removeDiet}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowDIets;
