import { SAVE_GENRES } from "../actions/types";

const initialState = [];

export const genresReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_GENRES:
      return [...payload];
    default:
      return state;
  }
};
