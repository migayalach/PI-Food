// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// COMPONENTS
import MyFavorite from "../MyFavorite/MyFavorite";

// REDUX
import { postFavorite, getPagination } from "../../Redux/actions";

// LIBRERY
import { Card, Image } from "antd";

// CSS
import "./card.css";

// JAVASCRIP
const { Meta } = Card;

function CardComponent({
  idRecipe,
  nameRecipe,
  imageRecipe,
  healthScore,
  favorite,
  page,
}) {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [favoriteCard, setFavoriteCard] = useState(false);

  const handleFavoriteCard = () => {
    setFavoriteCard(!favoriteCard);
    setFlag(true);
  };

  useEffect(async () => {
    if (flag) {
      dispatch(
        await postFavorite({
          idRecipe,
          favorite: favoriteCard,
          flag: "favorite",
        })
      );
      setFlag(false);
      dispatch(getPagination(page));
    }
  }, [favoriteCard]);

  useEffect(() => {
    setFavoriteCard(favorite);
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
        <MyFavorite
          favorite={favorite}
          handleFavoriteCard={handleFavoriteCard}
        />
      </Card>
    </div>
  );
}

export default CardComponent;
