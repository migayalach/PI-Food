// HOOK'S
import React, { useState, useEffect } from "react";

// COMPONENTS

// REDUX

// LIBRERY

// CSS
import "./my-favorite.css";

// JAVASCRIP

function MyFavorite({
  favorite,
  handleFavoriteCard,
  myFavorite,
  handleFavorite,
}) {
  return (
    <div className={myFavorite ? "favorite-detail" : "conteiner-favorite"}>
      {favorite ? (
        <button
          className="button-favorite"
          onClick={
            myFavorite ? () => handleFavorite() : () => handleFavoriteCard()
          }
        >
          ❤️
        </button>
      ) : (
        <button
          className="button-favorite"
          onClick={
            myFavorite ? () => handleFavorite() : () => handleFavoriteCard()
          }
        >
          🤍
        </button>
      )}
    </div>
  );
}

export default MyFavorite;
