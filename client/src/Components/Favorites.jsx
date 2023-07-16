import { connect } from "react-redux";
import Card from "./Card";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      <h1> LISTA DE FAVORITOS</h1>
      {myFavorites?.map(({ id, title, image, summary, diets, onClose }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            image={image}
            summary={summary}
            diets={diets}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

// TRAE EL ESTADO GLOVAL
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
