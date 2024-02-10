// HOOK'S
import React, { useEffect } from "react";

// COMPONENTS
import Button from "../Button";

// REDUX

// CSS

// JAVASCRIP

function Pagination({ pages }) {
  const aux = [];

  const lengthButton = (pages) => {
    for (let i = 1; i <= pages; i++) {
      aux.push(i);
    }
  };

  lengthButton(pages);

  return (
    <>
      {aux.map((index, i) => (
        <Button key={index} number={i + 1} action="link" />
      ))}
    </>
  );
}

export default Pagination;
