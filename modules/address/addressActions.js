import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_ADDRESS_LIST_REQUEST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_FAILURE,
  EDIT_ADDRESS_REQUEST,
  EDIT_ADDRESS_SUCCESS,
  EDIT_ADDRESS_FAILURE,
  REMOVE_ADDRESS_REQUEST,
  REMOVE_ADDRESS_SUCCESS,
  REMOVE_ADDRESS_FAILURE,
  CREATE_ADDRESS_REQUEST,
  CREATE_ADDRESS_SUCCESS,
  CREATE_ADDRESS_FAILURE,
} from './constants';

export function getAddressListAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/list`,
      method: 'GET',
      body: JSON.stringify(),
      types: [
        {
          type: GET_ADDRESS_LIST_REQUEST,
          meta: {showLoaderMobile: true},
        },
        {
          type: GET_ADDRESS_LIST_SUCCESS,
          meta: {showLoaderMobile: false},
        },
        {
          type: GET_ADDRESS_LIST_FAILURE,
          meta: {showLoaderMobile: false},
        },
      ],
    },
  };
}

export function editAddressAction(id, addressObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/${id}/update`,
      method: 'POST',
      body: JSON.stringify(addressObject),
      types: [
        {
          type: EDIT_ADDRESS_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: EDIT_ADDRESS_SUCCESS,
          meta: {showLoader: true, showLoaderMobile: false},
        },
        {
          type: EDIT_ADDRESS_FAILURE,
          meta: {showLoader: true, showLoaderMobile: false},
        },
      ],
    },
  };
}

export function removeAddressAction(id) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/${id}/delete`,
      method: 'GET',
      body: JSON.stringify(),
      types: [
        {
          type: REMOVE_ADDRESS_REQUEST,
          meta: {showLoaderMobile: true},
        },
        {
          type: REMOVE_ADDRESS_SUCCESS,
          meta: {showLoaderMobile: false},
        },
        {
          type: REMOVE_ADDRESS_FAILURE,
          meta: {showLoaderMobile: false},
        },
      ],
    },
  };
}

export function createAddressAction(addressObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/create`,
      method: 'POST',
      body: JSON.stringify(addressObject),
      types: [
        {
          type: CREATE_ADDRESS_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: CREATE_ADDRESS_SUCCESS,
          meta: {showLoader: false, showLoaderMobile: false},
        },
        {
          type: CREATE_ADDRESS_FAILURE,
          meta: {showLoader: false, showLoaderMobile: false},
        },
      ],
    },
  };
}
