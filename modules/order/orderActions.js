import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAILURE,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILURE,
} from './constants';

export function getOrderListAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/orders/list`,
      method: 'GET',
      types: [
        {type: GET_ORDER_LIST_REQUEST, meta: {showLoaderMobile: true}},
        {type: GET_ORDER_LIST_SUCCESS, meta: {showLoaderMobile: false}},
        {type: GET_ORDER_LIST_FAILURE, meta: {showLoaderMobile: false}},
      ],
    },
  };
}

export function getOrderDetailsAction(orderId) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/orders/${orderId}/view`,
      method: 'GET',
      types: [
        {type: GET_ORDER_DETAILS_REQUEST, meta: {showLoaderMobile: true}},
        {type: GET_ORDER_DETAILS_SUCCESS, meta: {showLoaderMobile: false}},
        {type: GET_ORDER_DETAILS_FAILURE, meta: {showLoaderMobile: false}},
      ],
    },
  };
}
