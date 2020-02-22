import {
  GET_PROFILE_DETAILS_REQUEST,
  GET_PROFILE_DETAILS_SUCCESS,
  GET_PROFILE_DETAILS_FAILURE,
  EDIT_PROFILE_DETAILS_REQUEST,
  EDIT_PROFILE_DETAILS_SUCCESS,
  EDIT_PROFILE_DETAILS_FAILURE
} from "./constants";

const initialState = {
  userDetails: {}
};

export default function profileDetailsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_PROFILE_DETAILS_REQUEST:
      return {
        ...state
      };
    case GET_PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: payload.data.user_details
      };
    case GET_PROFILE_DETAILS_FAILURE:
      return {
        ...state
      };
    case EDIT_PROFILE_DETAILS_REQUEST:
      return {
        ...state
      };
    case EDIT_PROFILE_DETAILS_SUCCESS:
      return {
        ...state
      };
    case EDIT_PROFILE_DETAILS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
