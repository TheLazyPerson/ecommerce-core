import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE,
} from './constants';

import {
  POST_ADD_TO_WISHLIST_SUCCESS,
  GET_REMOVE_FROM_WISHLIST_SUCCESS,
} from 'Core/modules/wishlist/wishlistConstants';

const initialState = {
  productDetail: {},
};

export default function productDetailReducer(
  state = initialState,
  {type, payload, meta},
) {
  switch (type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
      };

    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: payload.data,
      };

    case GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
      };

    case POST_ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        productDetail:
          meta.product_id === state.productDetail.id
            ? {
                ...state.productDetail,
                is_wishlisted: true,
              }
            : state.productDetail,
      };

    case GET_REMOVE_FROM_WISHLIST_SUCCESS:
      return {
        ...state,
        productDetail:
          meta.product_id === state.productDetail.id
            ? {
                ...state.productDetail,
                is_wishlisted: false,
              }
            : state.productDetail,
      };

    default:
      return state;
  }
}
