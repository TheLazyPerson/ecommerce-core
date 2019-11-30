import { RSAA } from 'redux-api-middleware';
import { API_ROOT } from 'Core/constants';

export function postSignupAction(signupObject) {
  return {
      [RSAA]: {
          endpoint: `${API_ROOT}/customer/register`,
          method: 'POST',
          body: JSON.stringify(signupObject),
          types: [
            'SIGNUP_REQUEST',
            'SIGNUP_SUCCESS',
            'SIGNUP_FAILURE',
          ]
      }
  }
}

/*   export function postCheckin(teamId, checkInObject) {
    return {
        [RSAA]: {
            endpoint: `${API_ROOT}/teams/${teamId}/checkin`,
            method: 'POST',
            body: JSON.stringify(checkInObject),
            types: [
                {type: POST_CHECKIN_REQUEST, meta:{showOverlayLoader: true}},
                {type: POST_CHECKIN_SUCCESS, meta:{showOverlayLoader: false}},
                {type: POST_CHECKIN_FAILURE, meta:{showOverlayLoader: false}}
            ]
        }
    }
  } */
