import axios from "axios";
export const GET_RECIPE = "GET_RECIPE";

export const getRecipes = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/recipes");
      const recipe = response.data;
      dispatch({
        type: GET_RECIPE,
        payload: recipe,
      });
    } catch (error) {
      alert(error);
    }
  };
};
