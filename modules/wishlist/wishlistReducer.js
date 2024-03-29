import {
  GET_WISHLIST_SUCCESS,
  GET_REMOVE_FROM_WISHLIST_SUCCESS,
  MOVE_TO_BAG_SUCCESS,
} from "./wishlistConstants";

const initialState = {
  wishlist: [],
};

export default function wishlistReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: payload.data,
      };

    case GET_REMOVE_FROM_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: payload.data,
      };

    case MOVE_TO_BAG_SUCCESS:
      return {
        ...state,
        wishlist: payload.data,
      };

    default:
      return state;
  }
}
