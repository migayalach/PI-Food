import { GET_RECIPES, SEARCH_REC_ID, GET_DIETS, ERROR } from "./actionsType";

const initialState = {
  recipes: [],
  page: 0,
  diets: [],
  aux: null,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload.result,
        page: payload.info.pages,
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
