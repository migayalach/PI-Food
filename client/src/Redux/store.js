import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

//CONECTANDO EL PROYECTO CON LA TERMINAL DEL NAVEGADOR
// applyMiddleware, compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CREANDO LA STORE - LIBRERIA
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) //PETICIONES A UNA API / SERVIDOR
);

export default store;
