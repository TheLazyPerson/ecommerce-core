import {
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAILURE,

  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILURE
} from './constants';

export function getOrderListAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/orders/list`,
      method: "GET",
      types: [
        GET_ORDER_LIST_REQUEST,
        GET_ORDER_LIST_SUCCESS,
        GET_ORDER_LIST_FAILURE
      ]
    }
  };
}


export function getOrderDetails(orderId) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/orders/${orderId}/view`,
      method: "GET",
      types: [
        GET_ORDER_DETAILS_REQUEST,
        GET_ORDER_DETAILS_SUCCESS,
        GET_ORDER_DETAILS_FAILURE
      ]
    }
  };
}
