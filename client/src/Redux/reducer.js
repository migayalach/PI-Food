import { filterDiets } from "../Utils/reducerFun";
import {
  ADD_FAV,
  REMOVE_FAV,
  GET_RECIPES,
  ADD_RECIPE,
  SEARCH_RECIPE,
  SEARCH_REC_ID,
  GET_DIETS,
  ORDER_DIETS,
} from "./actionsType";

const initialState = {
  myFavorites: [],
  recipes: [],
  diets: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };

    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, payload],
      };

    case SEARCH_RECIPE:
      return {
        ...state,
        recipes: payload,
      };

    case SEARCH_REC_ID:
      return {
        ...state,
        recipes: payload,
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      const data = isNaN(payload) ? payload : +payload;
      return {
        ...state,
        myFavorites: state.myFavorites.filter(({ id }) => id !== data),
      };

    case ORDER_DIETS:
      return {
        ...state,
        recipes: filterDiets(state.recipes, payload),
      };

    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
