import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SET_USER_DATA,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE
} from "../constants/signinConstants";

export function postSigninAction(signinObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/login`,
      method: "POST",
      body: JSON.stringify(signinObject),
      types: [
        { type: SIGN_IN_REQUEST, meta: { showLoader: true } },
        { type: SIGN_IN_SUCCESS, meta: { showLoader: false } },
        { type: SIGN_IN_FAILURE, meta: { showLoader: false } }
      ]
    }
  };
}

export function logoutAction() {
  // TODO make logout api call then
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/logout`,
      method: "GET",
      types: [
        { type: LOGOUT_REQUEST, meta: { showLoader: true } },
        { type: LOGOUT_SUCCESS, meta: { showLoader: false } },
        { type: LOGOUT_FAILURE, meta: { showLoader: false } }
      ]
    }
  };
}

export function setUserDataAction(userData) {
  return {
    type: SET_USER_DATA,
    payload: userData
  };
}
