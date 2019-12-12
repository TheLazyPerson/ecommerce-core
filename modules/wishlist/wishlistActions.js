import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  POST_ADD_TO_WISHLIST_REQUEST,
  POST_ADD_TO_WISHLIST_SUCCESS,
  POST_ADD_TO_WISHLIST_FAILURE,
} from './wishlistConstants';

export function addToWishlistAction(wishlistObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/wishlist/add`,
      method: "POST",
      body: JSON.stringify(wishlistObject),
      types: [
        POST_ADD_TO_WISHLIST_REQUEST,
        POST_ADD_TO_WISHLIST_SUCCESS,
        POST_ADD_TO_WISHLIST_FAILURE,
      ]
    }
  };
}
