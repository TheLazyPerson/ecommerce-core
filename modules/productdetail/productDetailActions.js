import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE
} from "./constants";

export function getProductDetailAction(exhibitionId, productId) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/exhibition/${exhibitionId}/product/${productId}`,
      method: "GET",
      body: JSON.stringify(),
      types: [
        GET_PRODUCT_DETAIL_REQUEST,
        GET_PRODUCT_DETAIL_SUCCESS,
        GET_PRODUCT_DETAIL_FAILURE
      ]
    }
  };
}
