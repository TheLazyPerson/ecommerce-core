import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE
} from "./constants";

import {
  POST_ADD_TO_WISHLIST_SUCCESS
} from 'Core/modules/wishlist/wishlistConstants';

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

    // TODO update reducer to have addToWishList
    // case POST_ADD_TO_WISHLIST_SUCCESS:
    //   return {
    //     ...state,        
    //   }
    
    default:
      return state;
  }
}
