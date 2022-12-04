import { axios } from "@services";

import { SAVE_GENRES } from "./types";

export const saveGenres = () => (dispatch) => {
  axios.get("/genre/movie/list").then(({ data: { genres } }) => {
    dispatch({ type: SAVE_GENRES, payload: genres });
  });
};
