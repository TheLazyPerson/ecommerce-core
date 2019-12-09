import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";

export function postSignupAction(signupObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/register`,
      method: "POST",
      body: JSON.stringify(signupObject),
      types: [
        {type: "SIGNUP_REQUEST", meta: { showLoader: true }},
        {type: "SIGNUP_SUCCESS", meta: { showLoader: false }},
        {type: "SIGNUP_FAILURE", meta: { showLoader: false }}
      ]
    }
  };
}
