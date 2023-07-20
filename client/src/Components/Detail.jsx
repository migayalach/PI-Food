// HOOK'S
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchRecId } from "../Redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRecId(id));
  }, [dispatch, id]);

  const recipe = useSelector((state) => state.recipes);
  return (
    <div>
      <h1>Estamos en detail</h1>
      {
        <div className="deatil">
          <div className="info-users">
            <p className="nombre-character">{recipe[0].id}</p>
            <p className="nombre-character">{recipe[0].name}</p>
            <p className="nombre-character">{recipe[0].title}</p>
            <p className="datos-character">Summary || {recipe[0].summary}</p>
            <p className="nombre-character">{recipe[0].healthScore}</p>
            <p className="nombre-character">{recipe[0].instructions}</p>
            <p className="datos-character">Diets || {recipe[0].diets}</p>
          </div>
          <img
            className="image-deatil"
            src={recipe[0].image}
            alt={recipe[0].title}
          />
        </div>
      }
    </div>
  );
};

export default Detail;
