import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  POST_CHANGE_PASSWORD_REQUEST,
  POST_CHANGE_PASSWORD_SUCCESS,
  POST_CHANGE_PASSWORD_FAILURE,
} from './constants';

export function changePasswordAction(changePasswordObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/change_password`,
      method: 'POST',
      body: JSON.stringify(changePasswordObject),
      types: [
        POST_CHANGE_PASSWORD_REQUEST,
        POST_CHANGE_PASSWORD_SUCCESS,
        POST_CHANGE_PASSWORD_FAILURE,
      ],
    },
  };
}
