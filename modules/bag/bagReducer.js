import {
  GET_BAG_REQUEST,
  GET_BAG_SUCCESS,
  GET_BAG_FAILURE,
  ADD_TO_BAG_REQUEST,
  ADD_TO_BAG_SUCCESS,
  ADD_TO_BAG_FAILURE,
  REMOVE_FROM_BAG_REQUEST,
  REMOVE_FROM_BAG_SUCCESS,
  REMOVE_FROM_BAG_FAILURE,
  EDIT_QUANTITY_REQUEST,
  EDIT_QUANTITY_SUCCESS,
  EDIT_QUANTITY_FAILURE
} from "./constants";

const initialState = {
  bagCount: 0,
  bagData: {}
};

export default function bagReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BAG_SUCCESS:
      return {
        ...state,
        bagCount: payload.data.items_count,
        bagData: payload.data
      };
    case ADD_TO_BAG_SUCCESS:
      return {
        ...state,
        bagData: payload.data,
        bagCount: payload.data.items_count,
      };
    case REMOVE_FROM_BAG_SUCCESS:
    return {
        ...state,
        bagData: payload.data,
        bagCount: payload.data.items_count,
      };
    case EDIT_QUANTITY_SUCCESS:
      return {
        ...state,
        bagData: payload.data,
        bagCount: payload.data.items_count,
      };
    default:
      return state;
  }
}
