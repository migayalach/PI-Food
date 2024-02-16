// HOOK'S
import React from "react";

// COMPONENTS

// REDUX

// CSS

// JAVASCRIP

function Button({ number, action }) {
  const handlerLogin = () => {
    alert("se elimino");
  };

  return <button onClick={handlerLogin}>{number}</button>;
}

export default Button;
