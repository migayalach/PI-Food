import { GET_RECIPE } from "./actions";
const initialState = {
  recipe: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return { ...initialState, recipe: action.payload };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
