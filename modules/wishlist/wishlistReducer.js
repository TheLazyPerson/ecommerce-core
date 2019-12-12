import {
  POST_ADD_TO_WISHLIST_REQUEST,
  POST_ADD_TO_WISHLIST_SUCCESS,
  POST_ADD_TO_WISHLIST_FAILURE
} from "./constants";

const initialState = {
  productList: [],
};

export default function wishlistReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case POST_ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        //productList: [...state.productList, payload.data]
      };
    default:
      return state;
  }
}
