import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE
} from "./constants";

export function getProductListAction(id) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/exhibition/${id}/products`,
      method: "POST",
      body: JSON.stringify(),
      types: [
        GET_PRODUCT_LIST_REQUEST,
        GET_PRODUCT_LIST_SUCCESS,
        GET_PRODUCT_LIST_FAILURE
      ]
    }
  };
}
