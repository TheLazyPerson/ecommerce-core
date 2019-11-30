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
