import {
  POST_CHANGE_PASSWORD_REQUEST,
  POST_CHANGE_PASSWORD_SUCCESS,
  POST_CHANGE_PASSWORD_FAILURE,
} from './constants';

const initialState = {};

export default function changePasswordReducer(
  state = initialState,
  {type, payload},
) {
  switch (type) {
    case POST_CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
      };
    case POST_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    case POST_CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
