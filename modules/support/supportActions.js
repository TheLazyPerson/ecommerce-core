import {RSAA} from 'redux-api-middleware';
import {API_ROOT} from 'Core/constants';
import {
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
} from './constants';

export function sendFeedbackAction(feedbackObject) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/customer/support/raise_ticket`,
      method: 'POST',
      body: JSON.stringify(feedbackObject),
      types: [
        {type: POST_FEEDBACK_REQUEST, meta: {showLoader: true}},
        {type: POST_FEEDBACK_SUCCESS, meta: {showLoader: false}},
        {type: POST_FEEDBACK_FAILURE, meta: {showLoader: false}},
        ,
      ],
    },
  };
}
