import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";
import {
  GET_EXHIBITION_LIST_REQUEST,
  GET_EXHIBITION_LIST_SUCCESS,
  GET_EXHIBITION_LIST_FAILURE
} from "./constants";

export function getExhibitionListAction(exhibitionRequestObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/exhibitions/list`,
      method: "POST",
      body: JSON.stringify(exhibitionRequestObject),
      types: [
        GET_EXHIBITION_LIST_REQUEST,
        GET_EXHIBITION_LIST_SUCCESS,
        GET_EXHIBITION_LIST_FAILURE
      ]
    }
  };
}
