import React from "react";

const Card = ({ title, image, summary, diets }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt={`Fotografia de: ${title}`} />
      <p>{summary}</p>
      <p>{diets}</p>
    </div>
  );
};

export default Card;
