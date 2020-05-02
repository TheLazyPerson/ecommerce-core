import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE,
  SET_FILTERS,
  ADD_FILTERS,
  CLEAR_FILTERS,
} from './constants';

export function getProductListAction(id, data) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/exhibition/${id}/products`,
      method: 'POST',
      body: JSON.stringify(data),
      types: [
        {type: GET_PRODUCT_LIST_REQUEST, meta: {showLoaderMobile: true}},
        {type: GET_PRODUCT_LIST_SUCCESS, meta: {showLoaderMobile: false}},
        {type: GET_PRODUCT_LIST_FAILURE, meta: {showLoaderMobile: false}},
      ],
    },
  };
}

export function clearFilters() {
  return {
    type: CLEAR_FILTERS,
  };
}

export function addFilters(filter) {
  return {
    type: ADD_FILTERS,
    payload: filter,
  };
}

export function setFilters(filter) {
  return {
    type: SET_FILTERS,
    payload: filter,
  };
}
