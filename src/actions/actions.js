import { SAVE_GENRES } from "./types";

export const saveGenres = (genres) => (dispatch) => {
  dispatch({ type: SAVE_GENRES, payload: genres });
};
