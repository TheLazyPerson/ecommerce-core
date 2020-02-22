import {
  GET_ADDRESS_LIST_REQUEST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_FAILURE,
  EDIT_ADDRESS_REQUEST,
  EDIT_ADDRESS_SUCCESS,
  EDIT_ADDRESS_FAILURE,
  REMOVE_ADDRESS_REQUEST,
  REMOVE_ADDRESS_SUCCESS,
  REMOVE_ADDRESS_FAILURE,
  CREATE_ADDRESS_REQUEST,
  CREATE_ADDRESS_SUCCESS,
  CREATE_ADDRESS_FAILURE
} from "./constants";

const initialState = {
  addressList: []
};

export default function addressReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ADDRESS_LIST_REQUEST:
      return {
        ...state
      };
    case GET_ADDRESS_LIST_SUCCESS:
      return {
        ...state,
        addressList: payload.data
      };
    case GET_ADDRESS_LIST_FAILURE:
      return {
        ...state
      };
    case REMOVE_ADDRESS_REQUEST:
      return {
        ...state
      };
    case REMOVE_ADDRESS_SUCCESS:
      return {
        ...state
      };
    case REMOVE_ADDRESS_FAILURE:
      return {
        ...state
      };
    case EDIT_ADDRESS_REQUEST:
      return {
        ...state
      };
    case EDIT_ADDRESS_SUCCESS:
      return {
        ...state
      };
    case EDIT_ADDRESS_FAILURE:
      return {
        ...state
      };
    case CREATE_ADDRESS_REQUEST:
      return {
        ...state
      };
    case CREATE_ADDRESS_SUCCESS:
      return {
        ...state
      };
    case CREATE_ADDRESS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
