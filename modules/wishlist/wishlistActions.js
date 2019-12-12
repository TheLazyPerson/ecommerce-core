import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  POST_ADD_TO_WISHLIST_REQUEST,
  POST_ADD_TO_WISHLIST_SUCCESS,
  POST_ADD_TO_WISHLIST_FAILURE,

  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAILURE,

  GET_REMOVE_FROM_WISHLIST_REQUEST,
  GET_REMOVE_FROM_WISHLIST_SUCCESS,
  GET_REMOVE_FROM_WISHLIST_FAILURE,
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

export function removeFromWishlist(wishlistId) {  
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/wishlist/remove/${wishlistId}`,
      method: "GET",
      types: [
        GET_REMOVE_FROM_WISHLIST_REQUEST,
        GET_REMOVE_FROM_WISHLIST_SUCCESS,
        GET_REMOVE_FROM_WISHLIST_FAILURE
      ]
    }
  };
}

export function getWishlistAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/wishlist`,
      method: "GET",
      types: [
        GET_WISHLIST_REQUEST,
        GET_WISHLIST_SUCCESS,
        GET_WISHLIST_FAILURE,
      ]
    }
  };
}
