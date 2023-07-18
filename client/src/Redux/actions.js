import axios from "axios";

import { ADD_FAV, REMOVE_FAV, GET_RECIPES } from "./actionsType";

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
    const apiData = await axios.get(`http://localhost:3001/recipes`);
    const recipes = apiData.data;
    dispatch({
      type: GET_RECIPES,
      payload: recipes,
    });
  };
};
