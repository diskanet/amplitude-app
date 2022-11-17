import { SAVE_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
};

export const saveMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MOVIE:
      return {
        ...state,
        movies: [...state],
      };
    default:
      return state;
  }
};
