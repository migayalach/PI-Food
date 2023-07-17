import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const CardsContainer = ({ characters, onClose, myFavorites }) => {

  return (
    <div>
      {characters.map(({ id, title, image, summary, diets }) => (
        <Card
          key={id}
          id={id}
          title={title}
          image={image}
          summary={summary}
          diets={diets}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

// TRAE EL ESTO GLOVAL
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(CardsContainer);
