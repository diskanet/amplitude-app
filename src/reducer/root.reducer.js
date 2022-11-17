import { combineReducers } from "redux";

import { genresReducer } from "./genres.reducer";

export const rootReducer = combineReducers({
  genres: genresReducer,
});

/**
 * Redux:
 * - store;
 * - reducer + action type;
 * - thunk + dispatch + action;
 * - selector;
 */
