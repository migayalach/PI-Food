import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";

const Card = ({
  id,
  title,
  image,
  summary,
  diets,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, title, image, summary, diets, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button onClick={() => onClose(id)}>X</button>

      <Link to={`/detail/${id}`}>
        <p>{title}</p>
      </Link>
      <img src={image} alt={`Fotografia de: ${title}`} />
      <p>{summary}</p>
      <h3>dietas</h3>
      <ul>
        {diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
    </div>
  );
};

// DESPACHA LAS FUNCIONES
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (recipe) => dispatch(addFav(recipe)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

// TRAE EL ESTO GLOVAL
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
