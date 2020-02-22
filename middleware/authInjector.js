import {RSAA} from 'redux-api-middleware';
import isNil from 'lodash/isNil';
import {platform, Build} from '../constants/index';
import {isTypeRequest} from '../utils/validationHelper';
import Auth from '../auth';

export default store => next => action => {
  const callApi = action[RSAA];

  // Check if this action is a redux-api-middleware action.
  if (callApi) {
    const {types} = callApi;
    console.log(types, 'types');

    //check if auth is required or not
    if (
      types &&
      types.length === 3 &&
      types[0].constructor.name === 'Object' &&
      types[0].type &&
      isTypeRequest(types[0].type) &&
      types[0].meta &&
      types[0].meta.noAuth
    ) {
      callApi.headers = Object.assign({}, callApi.headers, {
        Authorization: '',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept-Language': 'ar',
        Platform: platform,
        Build: Build,
        Accept: 'application/json,*/*',
      });

      return next(action);
    } else if (isNil(callApi.headers)) {
      callApi.headers = Object.assign({}, callApi.headers, {
        Authorization: Auth.GetBearerToken(store) || '',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept-Language': 'ar',
        Platform: platform,
        Build: Build,
        Accept: 'application/json,*/*',
      });
      return next(action);
    }

    // INFO not required for now
    /*     if (types && typeof callApi.types[0] == "object" && callApi.types[0].meta && callApi.types[0].meta.CustomContentType) {

      callApi.headers = Object.assign({}, callApi.headers, {
        'Content-Type': callApi.types[0].meta.CustomContentType,
        'Access-Control-Allow-Origin': '*',
        Platform: platform,
        Build: Build,
        accept:"application/json"

      })
      return next(action)

    } */
  } else {
    // Pass the FSA to the next action.
    return next(action);
  }
};
