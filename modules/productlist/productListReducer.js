import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE,
  SET_FILTERS,
  ADD_FILTERS,
  CLEAR_FILTERS,
} from "./constants";

import {
  POST_ADD_TO_WISHLIST_SUCCESS,
  GET_REMOVE_FROM_WISHLIST_SUCCESS,
} from "Core/modules/wishlist/wishlistConstants";
import map from "lodash/map";

const initialState = {
  productList: [],
  products: [],
  filters: {},
};

export default function productListReducer(
  state = initialState,
  { type, payload, meta }
) {
  switch (type) {
    case GET_PRODUCT_LIST_REQUEST:
      return {
        ...state,
      };
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: payload.data,
        products: payload.data.products,
      };
    case GET_PRODUCT_LIST_FAILURE:
      return {
        ...state,
      };
    case POST_ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        products: updateProductFromList(state.products, meta.product_id, {
          is_wishlisted: true,
        }),
      };

    case GET_REMOVE_FROM_WISHLIST_SUCCESS:
      return {
        ...state,
        products: updateProductFromList(state.products, meta.product_id, {
          is_wishlisted: false,
        }),
      };

    case SET_FILTERS:
      return {
        ...state,
        filter: payload,
      };

    case ADD_FILTERS:
      return {
        ...state,
        filter: {
          ...state.filter,
          payload,
        },
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filter: {},
      };

    default:
      return state;
  }
}

const updateProductFromList = (productList, productId, updateObject) => {
  return map(productList, (product) => {
    if (product.id === productId) {
      return {
        ...product,
        ...updateObject,
      };
    }

    return product;
  });
};
