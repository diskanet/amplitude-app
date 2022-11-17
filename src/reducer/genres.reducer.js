import { SAVE_GENRES } from "../actions/types";

const initialState = [];

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_GENRES:
      return {
        ...state,
        genres: [...state.genres, action.data],
      };
    default:
      return state;
  }
};
