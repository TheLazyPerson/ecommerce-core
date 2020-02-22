import {GET_BASIC_ALL_SUCCESS} from './constants';

const initialState = {
  basicData: {},
};

export default function basicReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_BASIC_ALL_SUCCESS:
      return {
        ...state,
        basicData: payload.data,
      };
    default:
      return state;
  }
}
