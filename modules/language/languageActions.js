import {
  SET_LANGUAGE,
} from './constants';

export const setLanguageAction = (languageCode) => {
  return dispatch => {
    dispatch({
      type: SET_LANGUAGE,
      payload: languageCode
    })
  }
}
