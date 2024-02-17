// HOOK'S
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// COMPONENTS
import {
  About,
  Detail,
  Error,
  ConteinerForm,
  Home,
  Favotire,
  Login,
} from "./View";
import NavBar from "./Components/NavBar/NavBar";

// REDUX

// CSS
import "./StyleSheets/App.css";

// JAVASCRIP

const App = () => {
  const location = useLocation();
  const [access, setAccess] = useState(false);

  useEffect(() => {}, []);

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={ConteinerForm} />
        <Route path="/favorite" component={Favotire} />
        <Route path="/detail/:idRecipe" component={Detail} />
        <Route path="/error" component={Error} />
      </Switch>
    </div>
  );
};

export default App;
