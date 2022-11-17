import { SAVE_GENRES } from "./types";

/**
 * This is thunk
 *
 * Він завжди пишеться як () => (dispatch) => { ... };
 *
 * `dispatch` береться за рахунок виклику всередині dispatch в компоненті.
 * Нипрклад, `dispatch(saveGenres(genres));
 */
export const saveGenres = (genres) => (dispatch) => {
  /**
   * Action - це об'єкт
   * з обов'зковоювластивістю type
   * і необов'зковою payload
   */
  const ACTION = {
    type: SAVE_GENRES,
    payload: { genres },
  };

  /**
   * dispatch по action.type трігерить функцію в reducer
   */
  dispatch(ACTION);
};
