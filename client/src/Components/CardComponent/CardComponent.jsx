// HOOK'S
import React, { useState } from "react";
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
  const handleFavoriteCard = () => {
    alert(":D");
  };

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
          <button className="button-favorite" onClick={handleFavoriteCard}>
            ❤️
          </button>
          {/* <button className="button-favorite" onClick={handleFavoriteCard}>
            🤍
          </button> */}
        </div>
      </Card>
    </div>
  );
}

export default CardComponent;
