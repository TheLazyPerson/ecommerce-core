import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGOUT_SUCCESS,
  SET_USER_DATA,
} from '../constants/signinConstants';

const initialState = {
  userDetails: null,
  userToken: null,
  isUserSignedIn: false,
};

export default function signinReducer(state = initialState, {type, payload}) {
switch (type) {
  case SIGN_IN_REQUEST:
    return {
      ...state,
    };
  
  case SIGN_IN_SUCCESS:
    return {
      ...state,
      userDetails: payload.data.user_details,
      userToken: payload.data.user_token,
      isUserSignedIn: true,
    };
  
  case SIGN_IN_FAILURE:
    return {
      ...state,
    };
  
  case SET_USER_DATA:

    return {
      ...state,
      userDetails: payload.user_details,
      userToken: payload.user_token,
      isUserSignedIn: true,
    };
  case LOGOUT_SUCCESS: 
    return {
      ...state,
      userDetails: null,
      userToken: null,
      isUserSignedIn: false,
    }
  default:
    return state;
  }
}
