import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_EXHIBITION_LIST_REQUEST,
  GET_EXHIBITION_LIST_SUCCESS,
  GET_EXHIBITION_LIST_FAILURE,
  GET_UPCOMING_EXHIBITION_LIST_REQUEST,
  GET_UPCOMING_EXHIBITION_LIST_SUCCESS,
  GET_UPCOMING_EXHIBITION_LIST_FAILURE,
  GET_TRENDING_EXHIBITION_LIST_REQUEST,
  GET_TRENDING_EXHIBITION_LIST_SUCCESS,
  GET_TRENDING_EXHIBITION_LIST_FAILURE,
} from './constants';

export function getExhibitionListAction() {
  const exhibitionRequestObject = {
    type: 'lastminute',
  };

  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/exhibitions/list`,
      method: 'POST',
      body: JSON.stringify(exhibitionRequestObject),
      types: [
        GET_EXHIBITION_LIST_REQUEST,
        GET_EXHIBITION_LIST_SUCCESS,
        GET_EXHIBITION_LIST_FAILURE,
      ],
    },
  };
}

export function getUpcomingExhibitionListAction() {
  const exhibitionRequestObject = {
    type: 'upcoming',
  };

  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/exhibitions/list`,
      method: 'POST',
      body: JSON.stringify(exhibitionRequestObject),
      types: [
        GET_UPCOMING_EXHIBITION_LIST_REQUEST,
        GET_UPCOMING_EXHIBITION_LIST_SUCCESS,
        GET_UPCOMING_EXHIBITION_LIST_FAILURE,
      ],
    },
  };
}

export function getTrendingExhibitionListAction() {
  const exhibitionRequestObject = {
    type: 'full',
  };

  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/exhibitions/list`,
      method: 'POST',
      body: JSON.stringify(exhibitionRequestObject),
      types: [
        GET_TRENDING_EXHIBITION_LIST_REQUEST,
        GET_TRENDING_EXHIBITION_LIST_SUCCESS,
        GET_TRENDING_EXHIBITION_LIST_FAILURE,
      ],
    },
  };
}
