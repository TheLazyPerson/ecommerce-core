import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  GET_SETTINGS_REQUEST,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_FAILURE,
  UPDATE_SETTINGS_REQUEST,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAILURE,
} from './constants';

export function getSettingsAction() {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/settings`,
      method: 'GET',
      types: [
        {
          type: GET_SETTINGS_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: GET_SETTINGS_SUCCESS,
          meta: {showLoader: false, showLoaderMobile: false},
        },
        {
          type: GET_SETTINGS_FAILURE,
          meta: {showLoader: false, showLoaderMobile: false},
        },
      ],
    },
  };
}

export function updateSettingsAction(settingsObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/settings`,
      method: 'POST',
      body: JSON.stringify(settingsObject),
      types: [
        {
          type: UPDATE_SETTINGS_REQUEST,
          meta: {showLoader: true, showLoaderMobile: true},
        },
        {
          type: UPDATE_SETTINGS_SUCCESS,
          meta: {showLoader: false, showLoaderMobile: false},
        },
        {
          type: UPDATE_SETTINGS_FAILURE,
          meta: {showLoader: false, showLoaderMobile: false},
        },
      ],
    },
  };
}
