// HOOK'S
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  detail,
}) {
  const [favorite, setFavorite] = useState(false);
  const location = useLocation();
  const handleFavoriteCard = () => {
    alert(":D");
  };

  return (
    <div className="card-container">
      <button onClick={handleFavoriteCard}>❤️</button>
      <button onClick={handleFavoriteCard}>🤍</button>
      {detail ? (
        <p>{nameRecipe}</p>
      ) : (
        <Link to={`/detail/${idRecipe}`}>
          <p>{nameRecipe}</p>
        </Link>
      )}
      <img className="card-image" src={imageRecipe} alt={nameRecipe} />
      {location.pathname !== "/home" && (
        <div>
          <p>{created}</p>
          <p>{healthScore}</p>
          <ul>
            Diets:
            {diets.map(({ nameDiet }, index) => (
              <li key={index}>{nameDiet}</li>
            ))}
          </ul>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
