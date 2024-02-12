// HOOK'S
import React from "react";

// COMPONENTS

// REDUX

// CSS

// JAVASCRIP

function ButtonDelete({ idDiet, removeDiet }) {
  const handleDeleteDiet = () => {
    removeDiet(idDiet);
  };

  return <div onClick={handleDeleteDiet}>X</div>;
}

export default ButtonDelete;
