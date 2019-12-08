import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE
} from "./constants";

const initialState = {
  productDetail: {}
};

export default function productDetailReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: payload.data
      };
    case GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
