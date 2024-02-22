import {
  GET_RECIPES,
  SEARCH_REC_ID,
  GET_DIETS,
  CREATE_RECIPE,
  FAVORITE,
  FILTER,
  ERROR,
} from "./actionsType";

const initialState = {
  recipes: [],
  page: 0,
  diets: [],
  favorites: [],
  filter: [],
  aux: null,
  error: null,
  success: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload.result,
        page: payload.info.pages,
        success: false,
      };

    case CREATE_RECIPE:
      return {
        ...state,
        recipes: payload.result,
        error: null,
        success: true,
      };

    case SEARCH_REC_ID:
      return {
        ...state,
        aux: payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };

    case FAVORITE:
      return {
        ...state,
      };

    case ERROR:
      return {
        ...state,
        error: payload.error,
      };

    case FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
