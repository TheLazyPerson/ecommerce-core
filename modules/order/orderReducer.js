import {
  GET_ORDER_LIST_SUCCESS,

  GET_ORDER_DETAILS_SUCCESS,
} from './constants';

const initialState = {
  orderList: [],
  orderDetails: {}
};

export default function orderReducer(
  state = initialState,
  { type, payload }
){
  switch (type) {
    case GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        orderList: payload.data
      };
    
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderDetails: payload.data, 
      }
    default:
      return state;
  }
}
