import {
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAILURE
} from "./wishlistConstants";

const initialState = {
  wishlist: [],
};

export default function wishlistReducer(
  state = initialState,
  { type, payload }
){
  switch (type) {
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: payload.data
      };
    default:
      return state;
  }
}
