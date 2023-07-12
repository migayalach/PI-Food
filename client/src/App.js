import axios from "axios";
// HOOK'S
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./Redux/actions";

// CSS
import "./StyleSheets/App.css";

// COMPONENTS
import CardsContainer from "./Components/CardsContainer";
import About from "./Components/About";
import Detail from "./Components/Detail";
import Error from "./Components/Error";
import Form from "./Components/Form";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRecipes());
  // }, [dispatch]);

  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=ad4a2ed956bf4120810ff3d859380cbf`
    ).then(({ data }) => {
      const respuesta = checkDiet(data.id, characters);
      if (respuesta === true)
        window.alert("La dieta ya existe no se puede repetir :C");
      else {
        if (data.id) setCharacters((oldChars) => [...oldChars, data]);
        else window.alert("¡No hay dieta con este ID!");
      }
    });
  };

  const checkDiet = (id, characters) => {
    let aux = false;
    for (const i of characters) {
      if (id === i.id) {
        aux = true;
        break;
      }
    }
    return aux;
  };

  const onClose = (idParams) => {
    const newCharacter = characters.filter(({ id }) => id !== +idParams);
    setCharacters(newCharacter);
  };
  return (
    <div className="App">
      <h1>Estamos en Home</h1>
      {/* {location.pathname !== "/" && <NavBar onSearch={onSearch} />} */}
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<CardsContainer characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path=":id" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
