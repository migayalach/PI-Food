// HOOK'S
import React, { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS

// REDUX

// CSS

// JAVASCRIP

function Card({ id, title, image, summary, healthScore, instructions, diets }) {
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteCard = () => {
    alert(":D");
  };

  return (
    <div className="card-container">
      <button onClick={handleFavoriteCard}>❤️</button>
      <button onClick={handleFavoriteCard}>🤍</button>
      <Link to={`/detail/${id}`}>
        <p>{title}</p>
      </Link>
      <img className="card-image" src={image} alt={title} />
      <p>{healthScore}</p>
      <p>{instructions}</p>
      <p>{diets}</p>
      <p>{summary}</p>
    </div>
  );
}

export default Card;
