import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../constants/signinConstants';

const initialState = {
  userDetails: null,
  userToken: null,
};

export default function signinReducer(state = initialState, {type, payload}) {
switch (type) {
  case SIGN_IN_REQUEST:
    return {
      ...state,
    };
  
  case SIGN_IN_SUCCESS:
    return {
      userDetails: payload.data.user_details,
      userToken: payload.data.user_token,
    };
  
  case SIGN_IN_FAILURE:
    return {
      ...state,
    };

  default:
    return state;
  }
}
