/* eslint import/prefer-default-export:0 */
import { SET_MESSAGE } from '../types/message';

export const setMessage = message => (
  (dispatch) => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        message,
      },
    });
  }
);
