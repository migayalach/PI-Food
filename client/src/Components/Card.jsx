import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, summary, diets, onClose }) => {
  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <p>{title}</p>
      </Link>
      <img src={image} alt={`Fotografia de: ${title}`} />
      <p>{summary}</p>
      <p>{diets}</p>
    </div>
  );
};

export default Card;
