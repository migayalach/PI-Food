// HOOK'S
import React from "react";

// COMPONENTS
import CreateRecipe from "../CreateRecipe/CreateRecipe";

// REDUX

// CSS
import "./container-form.css";

// JAVASCRIP

function ConteinerForm() {
  return (
    <div className="conteiner">
      <h1>Create a new recipe</h1>
      <CreateRecipe />
    </div>
  );
}

export default ConteinerForm;
