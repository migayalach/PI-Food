// HOOK'S
import React from "react";

// COMPONENTS
import DietsForm from "../DietsForm/DietsForm";

// REDUX

// CSS

// JAVASCRIP

function ConteinerForm({ handleHookDiets }) {
  return (
    <div>
      <label htmlFor="diets">Diets</label>
      <DietsForm handleHookDiets={handleHookDiets} />
    </div>
  );
}

export default ConteinerForm;
