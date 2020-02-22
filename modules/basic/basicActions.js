import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_BASIC_ALL_REQUEST,
  GET_BASIC_ALL_SUCCESS,
  GET_BASIC_ALL_FAILURE,
} from './constants';

export function getBasicAllAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/basic/all`,
      method: 'GET',
      types: [
        GET_BASIC_ALL_REQUEST,
        GET_BASIC_ALL_SUCCESS,
        GET_BASIC_ALL_FAILURE,
      ],
    },
  };
}
