// HOOK'S
import React from "react";

// COMPONENTS
import DietsForm from "../DietsForm/DietsForm";
import ShowDIets from "../ShowDIets/ShowDIets";

// REDUX

// CSS

// JAVASCRIP

function ConteinerForm() {
  return (
    <div>
      <label htmlFor="diets">Diets</label>
      <ShowDIets />
      <DietsForm />
    </div>
  );
}

export default ConteinerForm;
