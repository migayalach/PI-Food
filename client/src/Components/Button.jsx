// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS

// REDUX
import { getPagination } from "../Redux/actions";

// CSS

// JAVASCRIP

function Button({ number, action }) {
  const dispatch = useDispatch();

  const handlerLogin = () => {
    dispatch(getPagination(number));
  };

  return <button onClick={handlerLogin}>{number}</button>;
}

export default Button;
