import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  GET_PAYMENT_REQUEST,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_FAILURE
} from "./constants";

export function getPaymentAction(orderId, paymentType = "customer_order") {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/payment/test/url?order_id=${orderId}&payment_type=${paymentType}`,
      method: "GET",
      types: [
        { type: GET_PAYMENT_REQUEST, meta: { showLoader: true } },
        { type: GET_PAYMENT_SUCCESS, meta: { showLoader: false } },
        { type: GET_PAYMENT_FAILURE, meta: { showLoader: false } }
      ]
    }
  };
}
