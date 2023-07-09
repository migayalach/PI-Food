import CardsContainer from "../../Components/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../Redux/actions";
import axios from "axios";
import NavBar from "../../Components/NavBar";


const Home = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRecipes());
  // }, [dispatch]);
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=ad4a2ed956bf4120810ff3d859380cbf`
    ).then(({ data }) => {
      const respuesta = verificarPersonaje(data.id, characters);
      if (respuesta === true)
        window.alert("El personaje ya existe no se puede repetir :C");
      else {
        if (data.id) setCharacters((oldChars) => [...oldChars, data]);
        else window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const verificarPersonaje = (id, characters) => {
    let aux = false;
    for (const i of characters) {
      if (id === i.id) {
        aux = true;
        break;
      }
    }
    return aux;
  };
  return (
    <div>
      <h1>Estamos en Home</h1>
      <NavBar onSearch={onSearch}/>
      <CardsContainer characters={characters}/>
    </div>
  );
};

export default Home;
