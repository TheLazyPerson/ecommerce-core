import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGOUT_SUCCESS,
  SET_USER_DATA,
} from '../constants/signinConstants';
import {setToStorage, removeFromStorage} from 'Utils/storageWrapper';

const initialState = {
  userDetails: null,
  userToken: null,
  isUserSignedIn: false,
};

export default function signInReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      if (payload.code == 200 || payload.code == 201) {
        setToStorage('access_token', payload.data.user_token.access_token);
        return {
          ...state,
          userDetails: payload.data.user_details,
          userToken: payload.data.user_token,
          isUserSignedIn: true,
        };
      }

      return {...state};

    case SET_USER_DATA:
      return {
        ...state,
        userDetails: payload.user_details,
        userToken: payload.user_token,
        isUserSignedIn: true,
      };

    case LOGOUT_SUCCESS:
      if (payload.code == 200 || payload.code == 201) {
        removeFromStorage('access_token');
        return {
          ...state,
          userDetails: null,
          userToken: null,
          isUserSignedIn: false,
        };
      }

      return {...state};

    default:
      return state;
  }
}
