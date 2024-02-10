import { GET_RECIPES, SEARCH_REC_ID, ERROR } from "./actionsType";

const initialState = {
  recipes: [],
  page: 0,
  diets: [],
  aux: [],
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
