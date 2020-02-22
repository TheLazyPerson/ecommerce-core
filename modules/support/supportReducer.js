import {
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
} from './constants';

const initialState = {};

export default function supportReducer(state = initialState, {type, payload}) {
  switch (type) {
    case POST_FEEDBACK_REQUEST:
      return {
        ...state,
      };
    case POST_FEEDBACK_SUCCESS:
      return {
        ...state,
      };
    case POST_FEEDBACK_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
