import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
// import data from "../Utils/data";

const CardsContainer = ({characters}) => {
  // const data = useSelector((state) => state.recipe);
  return (
    <div>
      {characters.map(({ id, title, image, summary, diets }) => (
        <Card
          key={id}
          title={title}
          image={image}
          summary={summary}
          diets={diets}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
