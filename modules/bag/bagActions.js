import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
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
  CHECKOUT_BAG_REQUEST,
  CHECKOUT_BAG_SUCCESS,
  CHECKOUT_BAG_FAILURE,
} from "./constants";

export function addToBagAction(addItemObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/add`,
      method: "POST",
      body: JSON.stringify(addItemObject),
      types: [ADD_TO_BAG_REQUEST, ADD_TO_BAG_SUCCESS, ADD_TO_BAG_FAILURE]
    }
  };
}

export function getBagListAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/details`,
      method: "GET",
      body: JSON.stringify(),
      types: [GET_BAG_REQUEST, GET_BAG_SUCCESS, GET_BAG_FAILURE]
    }
  };
}

export function removeFromBagAction(id) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/${id}/delete`,
      method: "GET",
      body: JSON.stringify(),
      types: [
        REMOVE_FROM_BAG_REQUEST,
        REMOVE_FROM_BAG_SUCCESS,
        REMOVE_FROM_BAG_FAILURE
      ]
    }
  };
}

export function editQuantityAction(editQuantityObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/update`,
      method: "POST",
      body: JSON.stringify(editQuantityObject),
      types: [
        EDIT_QUANTITY_REQUEST,
        EDIT_QUANTITY_SUCCESS,
        EDIT_QUANTITY_FAILURE
      ]
    }
  };
}

export function setBagCount(bagCount) {
  return dispatch => {
    dispatch({
      type: SET_BAG_COUNT,
      payload: bagCount,
    })
  }
}

export function checkoutBagAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/checkout/bag/save`,
      method: "GET",
      types: [
        { type: CHECKOUT_BAG_REQUEST, meta: {showLoader: true} },
        { type: CHECKOUT_BAG_SUCCESS, meta: {showLoader: false}},
        { type: CHECKOUT_BAG_FAILURE, meta: {showLoader: false}}
      ]
    }
  };
}
