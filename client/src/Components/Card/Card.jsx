// HOOK'S
import React, { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS

// REDUX

// CSS

// JAVASCRIP

function Card({
  idRecipe,
  nameRecipe,
  imageRecipe,
  summary,
  healthScore,
  created,
  diets,
}) {
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteCard = () => {
    alert(":D");
  };

  return (
    <div className="card-container">
      <button onClick={handleFavoriteCard}>❤️</button>
      <button onClick={handleFavoriteCard}>🤍</button>
      <Link to={`/detail/${idRecipe}`}>
        <p>{nameRecipe}</p>
      </Link>
      <img className="card-image" src={imageRecipe} alt={nameRecipe} />
      <p>{healthScore}</p>
      <p>{created}</p>
      <ul>
        Diets:
        {diets.map(({ nameDiet }, index) => (
          <li key={index}>{nameDiet}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

export default Card;
