import {
  SET_LANGUAGE,
} from './constants';

const initialState = {
  languageCode: ''
};

export default function languageReducer(
  state = initialState,
  { type, payload }
){
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        languageCode: payload,
      };
    default:
      return state;
  }
}
