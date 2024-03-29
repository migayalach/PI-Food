// HOOK'S
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import MyFavorite from "../../Components/MyFavorite/MyFavorite";

// REDUX
import { getRecipeId, postFavorite } from "../../Redux/actions";

// LIBRARY
import { Card, Image } from "antd";

// CSS
import "./detail.css";

// JAVASCRIP
const { Meta } = Card;

function Detail() {
  const dispatch = useDispatch();
  const { idRecipe } = useParams();
  const selectAux = useSelector((state) => state.aux);

  const handleFavorite = () => {
    dispatch(
      postFavorite({
        idRecipe: selectAux.idRecipe,
        favorite: !selectAux.favorite,
        flag: "favorite",
      })
    );
    dispatch(getRecipeId(idRecipe));
  };

  useEffect(() => {
    dispatch(getRecipeId(idRecipe));
  }, []);

  if (!selectAux || Object.keys(selectAux).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="conteiner-card">
      <div>
        <h1>{selectAux.nameRecipe}</h1>
        <Meta description={selectAux.summary} className="text" />
        <h3>healthScore: {selectAux.healthScore}</h3>
        <h4>Diets:</h4>
        <div className="list-conteiner">
          <ul className="ul-list">
            {selectAux.diets.map(({ nameDiet }, index) => (
              <li key={index} className="li-list">
                {nameDiet}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Image
          width={500}
          src={selectAux.imageRecipe}
          alt={selectAux.nameRecipe}
          className="image"
        />
      </div>
      <MyFavorite
        myFavorite="myFavorite"
        favorite={selectAux.favorite}
        handleFavorite={handleFavorite}
      />
    </div>
  );
}

export default Detail;

//     <p>{created}</p>
