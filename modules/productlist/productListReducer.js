import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE
} from "./constants";

import {
  POST_ADD_TO_WISHLIST_SUCCESS,
  GET_REMOVE_FROM_WISHLIST_SUCCESS
} from 'Core/modules/wishlist/wishlistConstants';
import map from 'lodash/map';

const initialState = {
  productList: []
};

export default function productListReducer(
  state = initialState,
  { type, payload, meta }
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
    case POST_ADD_TO_WISHLIST_SUCCESS:
      
      return {
        ...state,
        productList: updateProductFromList(state.productList, meta.product_id, {is_wishlisted: true})
      };

    case GET_REMOVE_FROM_WISHLIST_SUCCESS:
      return {
        ...state,
        productList: updateProductFromList(state.productList, meta.product_id, {is_wishlisted: false})
      }
    default:
      return state;
  }
}


const updateProductFromList = (productList, productId, updateObject) => {
  return map(productList, product => {
    if(product.id == productId) {
      return {
        ...product,
        ...updateObject,
      }
    }

    return product;
  });
}

