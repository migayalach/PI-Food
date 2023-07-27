import {
  filterDiets,
  searchData,
  orderScore,
  orderAscDes,
} from "../Utils/reducerFun";
import {
  ADD_FAV,
  REMOVE_FAV,
  GET_RECIPES,
  ADD_RECIPE,
  SEARCH_RECIPE,
  SEARCH_REC_ID,
  GET_DIETS,
  ORDER_DIETS,
  ORIGIN_API,
  ORIGIN_CREATE,
  ORDER_SCORE,
  ORDER_AZ,
  ORDER_ZA,
} from "./actionsType";

const initialState = {
  myFavorites: [],
  recipes: [],
  diets: [],
  aux: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        aux: payload
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
        aux: filterDiets(state.recipes, payload),
      };

    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };

    case ORIGIN_API:
      return {
        ...state,
        aux: searchData(state.recipes, payload),
      };

    case ORIGIN_CREATE:
      return {
        ...state,
        aux: searchData(state.recipes, payload),
      };

    case ORDER_SCORE:
      return {
        ...state,
        aux: orderScore(state.recipes),
      };

    case ORDER_AZ:
      return {
        ...state,
        aux: orderAscDes(state.recipes, payload),
      };

    case ORDER_ZA:
      return {
        ...state,
        recipes: orderAscDes(state.recipes, payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
