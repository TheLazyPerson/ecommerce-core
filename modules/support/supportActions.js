import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE
} from "./constants";

export function sendFeedbackAction(feedbackObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/support/raise_ticket`,
      method: "POST",
      body: JSON.stringify(feedbackObject),
      types: [
        POST_FEEDBACK_REQUEST,
        POST_FEEDBACK_SUCCESS,
        POST_FEEDBACK_FAILURE
      ]
    }
  };
}
