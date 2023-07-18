import axios from "axios";
import { ADD_FAV, REMOVE_FAV, GET_RECIPES, ADD_RECIPE } from "./actionsType";
const URL = `http://localhost:3001/recipes`;

export const addFav = (recipe) => {
  return {
    type: ADD_FAV,
    payload: recipe,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL}`);
    const recipes = apiData.data;
    dispatch({
      type: GET_RECIPES,
      payload: recipes,
    });
  };
};

export const addRecipe = (recipe) => {
  return async function (dispatch) {
    let obj = {};
    for(let i in recipe){
      obj = {
        "nombre": recipe.nombre, 
        "imagen" : recipe.imagen, 
        "resumen": recipe.resumen, 
        "nivel" : recipe.nivelComida, 
        "pasoApaso" : recipe.pasoApaso, 
        "dieta" : recipe.dietas
      }
    }
    console.log(obj);
    try {
      const createRecipe = await axios.post(`http://localhost:3001/recipes`, obj);
      const newRecipe = createRecipe.data;
      dispatch({
        type: ADD_RECIPE,
        payload: newRecipe,
      });
    } catch (error) {
      alert("No se pudo crear");
    }
  };
};
