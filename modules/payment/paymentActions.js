import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  GET_PAYMENT_REQUEST,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_FAILURE,
} from "./constants";

export function getPaymentAction(orderId, paymentType = "customer_order") {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/payment/order`,
      method: "POST",
      body: JSON.stringify({
        order_id: orderId,
      }),
      types: [
        {
          type: GET_PAYMENT_REQUEST,
          meta: { showLoader: true, showLoaderMobile: true },
        },
        {
          type: GET_PAYMENT_SUCCESS,
          meta: { showLoader: false, showLoaderMobile: false },
        },
        {
          type: GET_PAYMENT_FAILURE,
          meta: { showLoader: false, showLoaderMobile: false },
        },
      ],
    },
  };
}
