import { RSAA } from "redux-api-middleware";
import { API_ROOT } from "Core/constants";

import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE
} from './searchConstants';

export function searchAction(type, query) {

  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/search?type=${type}&query=${query}`,
      method: 'GET',
      types: [
        GET_SEARCH_REQUEST,
        GET_SEARCH_SUCCESS,
        GET_SEARCH_FAILURE      
      ],
    }
  };
}

//{{url}}{{api}}/search?type=all&query=Lisa