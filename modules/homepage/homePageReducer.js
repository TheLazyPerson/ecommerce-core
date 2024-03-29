import {
  GET_EXHIBITION_LIST_SUCCESS,
  GET_UPCOMING_EXHIBITION_LIST_SUCCESS,
  GET_TRENDING_EXHIBITION_LIST_SUCCESS,
} from "./constants";

const initialState = {
  exhibitionList: [],
  trendingExhibitionList: [],
  upcomingExhibitionList: [],
};

export default function homePageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_EXHIBITION_LIST_SUCCESS:
      return {
        ...state,
        exhibitionList: payload.data,
      };

    case GET_UPCOMING_EXHIBITION_LIST_SUCCESS:
      return {
        ...state,
        upcomingExhibitionList: payload.data,
      };

    case GET_TRENDING_EXHIBITION_LIST_SUCCESS:
      return {
        ...state,
        trendingExhibitionList: payload.data,
      };

    default:
      return state;
  }
}
