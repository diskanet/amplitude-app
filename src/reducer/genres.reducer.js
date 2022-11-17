import { SAVE_GENRES } from "../actions/types";

// Action types

const initialState = [];

/**
 * Reducer отримує по action.type виклик,
 * що дає можливість задіяти зміни до store
 */
export const genresReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_GENRES:
      return [...payload.genres];

    default:
      return state;
  }
};
