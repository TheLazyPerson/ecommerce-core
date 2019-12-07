import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  GET_PROFILE_DETAILS_REQUEST,
  GET_PROFILE_DETAILS_SUCCESS,
  GET_PROFILE_DETAILS_FAILURE
} from "./constants";

export function getProfileDetailsAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/show`,
      method: "GET",
      body: JSON.stringify(),
      types: [
        GET_PROFILE_DETAILS_REQUEST,
        GET_PROFILE_DETAILS_SUCCESS,
        GET_PROFILE_DETAILS_FAILURE
      ]
    }
  };
}
