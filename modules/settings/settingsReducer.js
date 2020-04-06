import {
  GET_SETTINGS_REQUEST,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_FAILURE,
  UPDATE_SETTINGS_REQUEST,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAILURE
} from "./constants";

const initialState = {
  settings: {}
};

export default function settingsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_SETTINGS_REQUEST:
      return {
        ...state
      };
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: payload.data.settings
      };
    case GET_SETTINGS_FAILURE:
      return {
        ...state
      };
    case UPDATE_SETTINGS_REQUEST:
      return {
        ...state
      };
    case UPDATE_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: payload.data.settings
      };
    case UPDATE_SETTINGS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
