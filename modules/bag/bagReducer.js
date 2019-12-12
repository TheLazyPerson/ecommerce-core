import {
  GET_BAG_REQUEST,
  GET_BAG_SUCCESS,
  GET_BAG_FAILURE,
  ADD_TO_BAG_REQUEST,
  ADD_TO_BAG_SUCCESS,
  ADD_TO_BAG_FAILURE,
  REMOVE_FROM_BAG_REQUEST,
  REMOVE_FROM_BAG_SUCCESS,
  REMOVE_FROM_BAG_FAILURE
} from "./constants";

const initialState = {
  bagData: {}
};

export default function bagReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BAG_REQUEST:
      return {
        ...state
      };
    case GET_BAG_SUCCESS:
      return {
        ...state,
        bagData: payload.data
      };
    case GET_BAG_FAILURE:
      return {
        ...state
      };
    case ADD_TO_BAG_REQUEST:
      return {
        ...state
      };
    case ADD_TO_BAG_SUCCESS:
      return {
        ...state,
        bagData: payload.data
      };
    case ADD_TO_BAG_FAILURE:
      return {
        ...state
      };
    case REMOVE_FROM_BAG_REQUEST:
      return {
        ...state
      };
    case REMOVE_FROM_BAG_SUCCESS:
      return {
        ...state
      };
    case REMOVE_FROM_BAG_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
