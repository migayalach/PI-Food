// HOOK'S
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// COMPONENTS
import { About, Detail, Error, Form, Home, Favotire, Login } from "./View";
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
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
        <Route path="/favorite" component={Favotire} />
        <Route path="/detail/:idRecipe" component={Detail} />
        <Route path="/error" component={Error} />
      </Switch>
      holis
    </div>
  );
};

export default App;
