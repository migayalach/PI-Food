import "./StyleSheets/App.css";
import { Route, useLocation } from "react-router-dom";
import { Detail, Form, Home, Landing } from "./Views";
import NavBar from "./Components/NavBar";

function App() {
  const location =  useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/create" component={Form} />
      <Route path="/home" render={() => <Home />} />
    </div>
  );
}

export default App;
