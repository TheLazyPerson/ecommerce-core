import {
  GET_EXHIBITION_LIST_REQUEST,
  GET_EXHIBITION_LIST_SUCCESS,
  GET_EXHIBITION_LIST_FAILURE,
} from './constants';

const initialState = {
  exhibitionList: []
};

export default function signinReducer(state = initialState, {type, payload}) {
switch (type) {
  case GET_EXHIBITION_LIST_REQUEST:
    return {
      ...state,
    };
  case GET_EXHIBITION_LIST_SUCCESS:
    return {
      ...state,
      exhibitionList: payload.data
    }
  case GET_EXHIBITION_LIST_FAILURE:
    return {
      ...state,
    }
  default:
    return state;
  }
}
