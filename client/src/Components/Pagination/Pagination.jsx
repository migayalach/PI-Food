// HOOK'S
import React from "react";

// COMPONENTS
import Button from "../Button";

// REDUX

// CSS

// JAVASCRIP

function Pagination({ pages }) {

  const paginationButtons = [];
  for (let i = 1; i <= pages; i++) {
    paginationButtons.push(<Button key={i} pageNumber={i} />);
  }
  return (
    <div>
      {paginationButtons}
    </div>
  );
}

export default Pagination;
