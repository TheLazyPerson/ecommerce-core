import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE
} from "./constants";

const initialState = {
  productList: []
};

export default function productListReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_PRODUCT_LIST_REQUEST:
      return {
        ...state
      };
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: payload.data
      };
    case GET_PRODUCT_LIST_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
