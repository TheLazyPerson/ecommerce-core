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
      endpoint: `${API_ROOT}/seller/settings`,
      method: 'GET',
      types: [
        {type: GET_SETTINGS_REQUEST, meta: {showLoader: true}},
        {type: GET_SETTINGS_SUCCESS, meta: {showLoader: false}},
        {type: GET_SETTINGS_FAILURE, meta: {showLoader: false}},
      ],
    },
  };
}

export function updateSettingsAction(settingsObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/seller/settings`,
      method: 'POST',
      body: JSON.stringify(settingsObject),
      types: [
        {type: UPDATE_SETTINGS_REQUEST, meta: {showLoader: true}},
        {type: UPDATE_SETTINGS_SUCCESS, meta: {showLoader: false}},
        {type: UPDATE_SETTINGS_FAILURE, meta: {showLoader: false}},
      ],
    },
  };
}
