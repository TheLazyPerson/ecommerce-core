import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  CHECKOUT_BAG_REQUEST,
  CHECKOUT_BAG_SUCCESS,
  CHECKOUT_BAG_FAILURE,
  SELECT_ADDRESS_REQUEST,
  SELECT_ADDRESS_SUCCESS,
  SELECT_ADDRESS_FAILURE,
  SELECT_PAYMENT_METHOD_REQUEST,
  SELECT_PAYMENT_METHOD_SUCCESS,
  SELECT_PAYMENT_METHOD_FAILURE,
  SELECT_SHIPPING_METHOD_REQUEST,
  SELECT_SHIPPING_METHOD_SUCCESS,
  SELECT_SHIPPING_METHOD_FAILURE,
  SELECT_DELIVERY_ADDRESS,
  SELECT_SHIPPING_METHOD,
  SELECT_PAYMENT_METHOD,
} from './constants';

export function checkoutBagAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/save`,
      method: 'GET',
      types: [
        {
          type: CHECKOUT_BAG_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: CHECKOUT_BAG_SUCCESS,
          meta: {showLoader: false, showLoaderMobile: false},
        },
        {
          type: CHECKOUT_BAG_FAILURE,
          meta: {showLoader: false, showLoaderMobile: false},
        },
      ],
    },
  };
}

export function selectAddressAction(selectAddressObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/address`,
      method: 'POST',
      body: JSON.stringify(selectAddressObject),
      types: [
        {
          type: SELECT_ADDRESS_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: SELECT_ADDRESS_SUCCESS,
          meta: {showLoader: false, showLoaderMobile: false},
        },
        {
          type: SELECT_ADDRESS_FAILURE,
          meta: {showLoader: false, showLoaderMobile: false},
        },
      ],
    },
  };
}

export function selectShippingMethodAction(shippingObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/shipping`,
      method: 'POST',
      body: JSON.stringify(shippingObject),
      types: [
        {
          type: SELECT_SHIPPING_METHOD_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: SELECT_SHIPPING_METHOD_SUCCESS,
          meta: {showLoader: false, showLoaderMobile: false},
        },
        {
          type: SELECT_SHIPPING_METHOD_FAILURE,
          meta: {showLoader: false, showLoaderMobile: false},
        },
      ],
    },
  };
}

export function selectPaymentMethodAction(paymentObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/payment`,
      method: 'POST',
      body: JSON.stringify(paymentObject),
      types: [
        {
          type: SELECT_PAYMENT_METHOD_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: SELECT_PAYMENT_METHOD_SUCCESS,
          meta: {showLoader: false, showLoaderMobile: false},
        },
        {
          type: SELECT_PAYMENT_METHOD_FAILURE,
          meta: {showLoader: false, showLoaderMobile: false},
        },
      ],
    },
  };
}

export function selectDeliveryAddress(addressObject) {
  return dispatch => {
    dispatch({type: SELECT_DELIVERY_ADDRESS, payload: addressObject});
  };
}

export function selectShippingMethod(shippingObject) {
  return dispatch => {
    dispatch({type: SELECT_SHIPPING_METHOD, payload: shippingObject});
  };
}

export function selectPaymentMethod(addressObject) {
  return dispatch => {
    dispatch({type: SELECT_PAYMENT_METHOD, payload: addressObject});
  };
}
