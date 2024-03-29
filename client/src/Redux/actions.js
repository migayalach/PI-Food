import axios from "axios";

import {
  GET_RECIPES,
  SEARCH_REC_ID,
  GET_DIETS,
  CREATE_RECIPE,
  FAVORITE,
  FILTER,
  ERROR,
} from "./actionsType";

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

export const postRecipe = (recipe) => {
  return async function (dispatch) {
    try {
      const createRecipe = await axios.post(`${URL}/recipes`, recipe);
      dispatch({
        type: CREATE_RECIPE,
        payload: createRecipe.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllDiets = () => {
  return async function (dispatch) {
    try {
      const dietsData = await axios.get(`${URL}/diets`);
      dispatch({
        type: GET_DIETS,
        payload: dietsData.data,
      });
    } catch (error) {}
  };
};

export const postFavorite = (data) => {
  return async function (dispatch) {
    try {
      const favorite = await axios.put(`${URL}/recipes`, data);
      dispatch({
        type: FAVORITE,
        payload: favorite.data,
      });
    } catch (error) {}
  };
};

export const filterData = ({ name, order, healthScore, diets }) => {
  return async function (dispatch) {
    try {
      const dataFilter = await axios.get(
        `${URL}/filter?name=${name}&order=${order}&healthScore=${healthScore}&diets=${diets}`
      );
      console.log(dataFilter);
      dispatch({
        type: FILTER,
        payload: dataFilter.data,
      });
    } catch (error) {}
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
