import axios from "axios";


// HOOK'S
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=8f3ff4a53b5f4cda9f4208ab3e0d674b `
    ).then(({ data }) => {
      if (data.id) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>Estamos en detail</h1>
      {character && (
        <div className="deatil">
          <div className="info-users">
            <p className="nombre-character">{character.title}</p>
            <p className="datos-character">Summary || {character.summary}</p>
            <p className="datos-character">Diets || {character.diets}</p>
          </div>
          <img
            className="image-deatil"
            src={character.image}
            alt={character.title}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
