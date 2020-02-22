import {
  CHECKOUT_BAG_SUCCESS,
  SELECT_DELIVERY_ADDRESS,
  SELECT_SHIPPING_METHOD,
  SELECT_PAYMENT_METHOD,
} from './constants';

const initialState = {
  deliveryAddress: {},
  shippingMethod: '',
  paymentMethod: '',
};

export default function checkoutReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SELECT_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryAddress: payload,
      };

    case SELECT_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: payload,
      };

    case SELECT_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };
    default:
      return state;
  }
}
