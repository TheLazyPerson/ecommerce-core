import {SET_LANGUAGE} from './constants';

const initialState = {
  languageCode: '',
  isRTL: false,
};

export default function languageReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        languageCode: payload,
        isRTL: payload === 'ar' ? true : false,
      };
    default:
      return state;
  }
}
