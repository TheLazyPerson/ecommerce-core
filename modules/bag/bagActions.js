import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_BAG_REQUEST,
  GET_BAG_SUCCESS,
  GET_BAG_FAILURE,
  ADD_TO_BAG_REQUEST,
  ADD_TO_BAG_SUCCESS,
  ADD_TO_BAG_FAILURE,
  REMOVE_FROM_BAG_REQUEST,
  REMOVE_FROM_BAG_SUCCESS,
  REMOVE_FROM_BAG_FAILURE,
  EDIT_QUANTITY_REQUEST,
  EDIT_QUANTITY_SUCCESS,
  EDIT_QUANTITY_FAILURE,
  SET_BAG_COUNT,
} from './constants';

export function addToBagAction(addItemObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/add`,
      method: 'POST',
      body: JSON.stringify(addItemObject),
      types: [
        {
          type: ADD_TO_BAG_REQUEST,
          meta: {showLoaderMobile: true},
        },
        {
          type: ADD_TO_BAG_SUCCESS,
          meta: {showLoaderMobile: false},
        },
        {
          type: ADD_TO_BAG_FAILURE,
          meta: {showLoaderMobile: false},
        },
      ],
    },
  };
}

export function getBagListAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/details`,
      method: 'GET',
      body: JSON.stringify(),
      types: [
        {
          type: GET_BAG_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: GET_BAG_SUCCESS,
          meta: {showLoaderMobile: false},
        },
        {
          type: GET_BAG_FAILURE,
          meta: {showLoaderMobile: false},
        },
      ],
    },
  };
}

export function removeFromBagAction(id) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/${id}/delete`,
      method: 'GET',
      body: JSON.stringify(),
      types: [
        {
          type: REMOVE_FROM_BAG_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: REMOVE_FROM_BAG_SUCCESS,
          meta: {showLoaderMobile: false},
        },
        {
          type: REMOVE_FROM_BAG_FAILURE,
          meta: {showLoaderMobile: false},
        },
      ],
    },
  };
}

export function editQuantityAction(editQuantityObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/update`,
      method: 'POST',
      body: JSON.stringify(editQuantityObject),
      types: [
        {
          type: EDIT_QUANTITY_REQUEST,
          meta: {showLoaderMobile: true},
        },
        {
          type: EDIT_QUANTITY_SUCCESS,
          meta: {showLoaderMobile: false},
        },
        {
          type: EDIT_QUANTITY_FAILURE,
          meta: {showLoaderMobile: false},
        },
      ],
    },
  };
}

export function setBagCount(bagCount) {
  return dispatch => {
    dispatch({
      type: SET_BAG_COUNT,
      payload: bagCount,
    });
  };
}
