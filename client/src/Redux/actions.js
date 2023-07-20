import axios from "axios";
import {
  ADD_FAV,
  REMOVE_FAV,
  GET_RECIPES,
  ADD_RECIPE,
  SEARCH_RECIPE,
  SEARCH_REC_ID,
  GET_DIETS,
  ORDER_DIETS,
  ORIGIN_DATA,
} from "./actionsType";
import { newObjAddRec } from "../Utils/actionFun";
const URL = `http://localhost:3001/recipes`;
const URL_DIETS = `http://localhost:3001/diets`;

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
    const obj = newObjAddRec(recipe);
    try {
      const createRecipe = await axios.post(URL, obj);
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

export const searchRec = (recipe) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL}?name=${recipe}`);
    const recipeData = response.data;
    dispatch({
      type: SEARCH_RECIPE,
      payload: recipeData,
    });
  };
};

export const searchRecId = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL}/${id}`);
    const recipe = response.data;
    dispatch({
      type: SEARCH_REC_ID,
      payload: recipe,
    });
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    const dietsApi = await axios.get(`${URL_DIETS}`);
    const responseApi = dietsApi.data;
    dispatch({
      type: GET_DIETS,
      payload: responseApi,
    });
  };
};

export const orderDiets = (diet) => {
  return {
    type: ORDER_DIETS,
    payload: diet,
  };
};

export const originData = (data) => {
  return {
    type: ORIGIN_DATA,
    payload: data,
  };
};
