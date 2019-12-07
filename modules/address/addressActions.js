import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  GET_ADDRESS_LIST_REQUEST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_FAILURE
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
