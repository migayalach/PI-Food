import axios from "axios";
// HOOK'S
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { addFav, removeFav } from "./Redux/actions";
import { connect, useDispatch } from "react-redux";

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
import Favorites from "./Components/Favorites";

// REDUX
import { getRecipes } from "./Redux/actions";

const App = ({ removeFav }) => {
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

  // nuevo
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  //hasta aqui

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
    removeFav(idParams);
  };

  const logout = () => {
    alert("Sali");
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <NavBar onSearch={onSearch} logout={logout} />
      )}
      <Switch>
        <Route path="/home">
          <CardsContainer characters={characters} onClose={onClose} />
        </Route>

        <Route path="/form" component={Form} />
        <Route path="/about" component={About} />
        <Route path="/favorites" component={Favorites} />

        <Route path="/detail/:id" component={Detail} />
        <Route path="/:id" component={Error} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
};

// DESPACHA LAS FUNCIONES
const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(null, mapDispatchToProps)(App);
