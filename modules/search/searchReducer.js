import {GET_SEARCH_SUCCESS} from './searchConstants';
import {
  POST_ADD_TO_WISHLIST_SUCCESS,
  GET_REMOVE_FROM_WISHLIST_SUCCESS,
} from 'Core/modules/wishlist/wishlistConstants';
import map from 'lodash/map';

const initialState = {
  productList: [],
  exhibitionList: [],
};

export default function searchReducer(
  state = initialState,
  {type, payload, meta},
) {
  switch (type) {
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        productList: payload.data.products,
        exhibitionList: payload.data.exhibitions,
      };
    case POST_ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        productList: updateProductFromList(state.productList, meta.product_id, {
          is_wishlisted: true,
        }),
      };

    case GET_REMOVE_FROM_WISHLIST_SUCCESS:
      return {
        ...state,
        productList: updateProductFromList(state.productList, meta.product_id, {
          is_wishlisted: false,
        }),
      };
    default:
      return state;
  }
}

const updateProductFromList = (productList, productId, updateObject) => {
  return map(productList, product => {
    if (product.id === productId) {
      return {
        ...product,
        ...updateObject,
      };
    }

    return product;
  });
};
