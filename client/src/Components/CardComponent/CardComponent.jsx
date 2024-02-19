// HOOK'S
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// COMPONENTS

// REDUX

// LIBRERY
import { Card, Image } from "antd";

// CSS
import "./card.css";

// JAVASCRIP
const { Meta } = Card;

function CardComponent({ idRecipe, nameRecipe, imageRecipe, healthScore }) {
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteCard = (idRecipe) => {
    setFavorite(!favorite);
    // const obj = { idRecipe, favorite };
    // console.log(obj);
  };

  console.log(favorite);

  useEffect(() => {}, []);

  return (
    <div className="card-container">
      <Card
        hoverable
        style={{
          width: 340,
        }}
        cover={<Image src={imageRecipe} alt={nameRecipe} />}
      >
        <Link to={`/detail/${idRecipe}`}>
          <Meta
            title={nameRecipe}
            description={`healthScore: ${healthScore}`}
          />
        </Link>
        <div className="conteiner-favorite">
          {favorite ? (
            <button
              className="button-favorite"
              onClick={() => handleFavoriteCard(idRecipe)}
            >
              ❤️
            </button>
          ) : (
            <button
              className="button-favorite"
              onClick={() => handleFavoriteCard(idRecipe)}
            >
              🤍
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default CardComponent;
