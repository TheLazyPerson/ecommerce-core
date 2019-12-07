import {
  GET_ADDRESS_LIST_REQUEST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_FAILURE
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
    default:
      return state;
  }
}
