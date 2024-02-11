import axios from "axios";

import { GET_RECIPES, SEARCH_REC_ID, ERROR } from "./actionsType";

const URL = `http://localhost:3001/food`;

export const getRecipeAll = () => {
  return async function (dispatch) {
    try {
      const allRecipe = await axios.get(`${URL}/recipes`);
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
      const recipeData = await axios.get(`${URL}/recipes/${idRecipe}`);
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

export const getPagination = (page) => {
  return async function (dispatch) {
    try {
      const pageCall = await axios.get(`${URL}/recipes?page=${page}`);
      dispatch({
        type: GET_RECIPES,
        payload: pageCall.data,
      });
    } catch (error) {}
  };
};
