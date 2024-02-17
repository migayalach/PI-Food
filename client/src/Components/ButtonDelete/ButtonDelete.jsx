// HOOK'S
import React from "react";

// COMPONENTS

// REDUX

// CSS
import "./button-delete.css";

// JAVASCRIP

function ButtonDelete({ idDiet, removeDiet }) {
  const handleDeleteDiet = () => {
    removeDiet(idDiet);
  };

  return (
    <button className="button-delete " onClick={handleDeleteDiet}>
      X
    </button>
  );
}

export default ButtonDelete;
