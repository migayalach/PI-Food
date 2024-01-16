// HOOK'S
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// COMPONENTS
import { About, Detail, Error, Form, Home, Favotire } from "./View";
import NavBar from "./Components/NavBar/NavBar";

// REDUX

// CSS
import "./StyleSheets/App.css";

// JAVASCRIP

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
        <Route path="/favorite" component={Favotire} />
        <Route path="/detail/:idRecipe" component={Detail} />
        <Route path="/error" component={Error} />
      </Switch>
    </div>
  );
};

export default App;
