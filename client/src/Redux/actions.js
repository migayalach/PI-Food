import axios from "axios";

import { GET_RECIPES, SEARCH_REC_ID, ERROR } from "./actionsType";

const URL = `http://localhost:3001/recipes`;
const URL_DIETS = `http://localhost:3001/diets`;

export const getRecipeAll = () => {
  return async function (dispatch) {
    try {
      const allRecipe = await axios.get(`${URL}`);
      dispatch({
        type: GET_RECIPES,
        payload: allRecipe.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getRecipeId = (idRecipe) => {
  return async function (dispatch) {
    try {
      const recipeData = await axios.get(`${URL}/${idRecipe}`);
      dispatch({
        type: SEARCH_REC_ID,
        payload: recipeData.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};
