import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const data = useSelector((state) => state.recipe);
  return (
    <div>
      {data.map(({ id, title, image, summary, diets }) => (
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
