import { ADD_FAV, REMOVE_FAV, GET_RECIPES, ADD_RECIPE } from "./actionsType";

const initialState = {
  myFavorites: [],
  recipes: [],
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

    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(({ id }) => id !== +payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
