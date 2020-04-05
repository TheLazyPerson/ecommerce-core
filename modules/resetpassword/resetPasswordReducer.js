import {
  CREATE_PASSWORD_REQUEST,
  CREATE_PASSWORD_SUCCESS,
  CREATE_PASSWORD_FAILURE,
  TOKEN_CHECK_REQUEST,
  TOKEN_CHECK_SUCCESS,
  TOKEN_CHECK_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
} from "./constants";

const initialState = {
  tokenInformation: {}
};

export default function resetPasswordReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CREATE_PASSWORD_REQUEST:
      return {
        ...state
      };
    case CREATE_PASSWORD_SUCCESS:
      return {
        ...state
      };
    case CREATE_PASSWORD_FAILURE:
      return {
        ...state
      };
    case TOKEN_CHECK_REQUEST:
      return {
        ...state
      };
    case TOKEN_CHECK_SUCCESS:
      return {
        ...state,
        tokenInformation: payload
      };
    case TOKEN_CHECK_FAILURE:
      return {
        ...state
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
