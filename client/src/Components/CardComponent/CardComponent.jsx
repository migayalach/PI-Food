// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// COMPONENTS

// REDUX
import { postFavorite } from "../../Redux/actions";

// LIBRERY
import { Card, Image } from "antd";

// CSS
import "./card.css";

// JAVASCRIP
const { Meta } = Card;

function CardComponent({ idRecipe, nameRecipe, imageRecipe, healthScore }) {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteCard = () => {
    setFavorite(!favorite);
    setFlag(true);
  };

  useEffect(() => {
    if (flag) {
      dispatch(postFavorite({ idRecipe, favorite, flag: "favorite" }));
      setFlag(false);
    }
  }, [favorite]);

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
              onClick={() => handleFavoriteCard()}
            >
              ❤️
            </button>
          ) : (
            <button
              className="button-favorite"
              onClick={() => handleFavoriteCard()}
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
