import { ADD_FAV, REMOVE_FAV } from "./actionsType";
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
