import {
  filterDiets,
  searchData,
  orderScore,
  orderAscDes,
} from "../Utils/reducerFun";
import {
  GET_RECIPES,
  SEARCH_REC_ID,
  ERROR,
  ADD_FAV,
  REMOVE_FAV,
  ADD_RECIPE,
  SEARCH_RECIPE,
  GET_DIETS,
  ORDER_DIETS,
  ORIGIN_API,
  ORIGIN_CREATE,
  ORDER_SCORE,
  ORDER_AZ,
  ORDER_ZA,
} from "./actionsType";

const initialState = {
  recipes: [],
  myFavorites: [],
  diets: [],
  aux: [],
  order: [],
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };

    case SEARCH_REC_ID: {
      return {
        ...state,
        aux: payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
