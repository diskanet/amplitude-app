import { combineReducers } from "redux";

import { genresReducer } from "./genres.reducer";

export const rootReducer = combineReducers({
  genresReducer,
});
