import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_PROFILE_DETAILS_REQUEST,
  GET_PROFILE_DETAILS_SUCCESS,
  GET_PROFILE_DETAILS_FAILURE,
  EDIT_PROFILE_DETAILS_REQUEST,
  EDIT_PROFILE_DETAILS_SUCCESS,
  EDIT_PROFILE_DETAILS_FAILURE,
} from './constants';

export function getProfileDetailsAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/show`,
      method: 'GET',
      body: JSON.stringify(),
      types: [
        {GET_PROFILE_DETAILS_REQUEST, meta: {showLoaderMobile: true}},
        {GET_PROFILE_DETAILS_SUCCESS, meta: {showLoaderMobile: false}},
        {GET_PROFILE_DETAILS_FAILURE, meta: {showLoaderMobile: false}},
      ],
    },
  };
}

export function editProfileDetailsAction(updatedProfileObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/update`,
      method: 'POST',
      body: JSON.stringify(updatedProfileObject),
      types: [
        {EDIT_PROFILE_DETAILS_REQUEST, meta: {showLoaderMobile: true}},
        {EDIT_PROFILE_DETAILS_SUCCESS, meta: {showLoaderMobile: false}},
        {EDIT_PROFILE_DETAILS_FAILURE, meta: {showLoaderMobile: false}},
      ],
    },
  };
}
