import {
GET_SEARCH_SUCCESS,
} from "./searchConstants";

const initialState = {
  productList: [],
  exhibitionList: []
};

export default function searchReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {

    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        productList: payload.data.products,
        exhibitionList: payload.data.exhibitions
      };

    default:
      return state;
  }
}
