import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  CREATE_PASSWORD_REQUEST,
  CREATE_PASSWORD_SUCCESS,
  CREATE_PASSWORD_FAILURE,
  TOKEN_CHECK_REQUEST,
  TOKEN_CHECK_SUCCESS,
  TOKEN_CHECK_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './constants';

export function createPasswordTokenAction(createPasswordObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/password/create`,
      method: 'POST',
      body: JSON.stringify(createPasswordObject),
      types: [
        {type: CREATE_PASSWORD_REQUEST, meta: {showLoaderMobile: true}},
        {type: CREATE_PASSWORD_SUCCESS, meta: {showLoaderMobile: false}},
        {type: CREATE_PASSWORD_FAILURE, meta: {showLoaderMobile: false}},
      ],
    },
  };
}

export function verifyPasswordTokenAction(token) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/password/find/${token}`,
      method: 'GET',
      body: undefined,
      types: [TOKEN_CHECK_REQUEST, TOKEN_CHECK_SUCCESS, TOKEN_CHECK_FAILURE],
    },
  };
}

export function resetPasswordAction(resetPasswordObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/password/reset`,
      method: 'POST',
      body: JSON.stringify(resetPasswordObject),
      types: [
        {type: RESET_PASSWORD_REQUEST, meta: {showLoaderMobile: true}},
        {type: RESET_PASSWORD_SUCCESS, meta: {showLoaderMobile: false}},
        {type: RESET_PASSWORD_FAILURE, meta: {showLoaderMobile: false}},
      ],
    },
  };
}
