import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
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
  CREATE_ADDRESS_FAILURE
} from "./constants";

export function getAddressListAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/list`,
      method: "GET",
      body: JSON.stringify(),
      types: [
        GET_ADDRESS_LIST_REQUEST,
        GET_ADDRESS_LIST_SUCCESS,
        GET_ADDRESS_LIST_FAILURE
      ]
    }
  };
}

export function editAddressAction(id, addressObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/${id}/update`,
      method: "POST",
      body: JSON.stringify(addressObject),
      types: [EDIT_ADDRESS_REQUEST, EDIT_ADDRESS_SUCCESS, EDIT_ADDRESS_FAILURE]
    }
  };
}

export function removeAddressAction(id) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/${id}/delete`,
      method: "GET",
      body: JSON.stringify(),
      types: [
        REMOVE_ADDRESS_REQUEST,
        REMOVE_ADDRESS_SUCCESS,
        REMOVE_ADDRESS_FAILURE
      ]
    }
  };
}

export function createAddressAction(addressObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/address/create`,
      method: "POST",
      body: JSON.stringify(addressObject),
      types: [
        CREATE_ADDRESS_REQUEST,
        CREATE_ADDRESS_SUCCESS,
        CREATE_ADDRESS_FAILURE
      ]
    }
  };
}
