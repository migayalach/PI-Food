// HOOK'S
import React from "react";

// COMPONENTS

// REDUX

// CSS

// JAVASCRIP

function Button({ pageNumber }) {
  const handlerLogin = () => {
    alert("hola");
  };

  return <button onClick={handlerLogin}>{pageNumber}</button>;
}

export default Button;
