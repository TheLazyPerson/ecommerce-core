import { isEmpty } from "lodash";

/* payload error example :- 
    {
      message: "401 - ",
      name: "ApiError",
      response: {
        error: "invalid_credentials"
        message: "The user credentials were incorrect."
      }  
      status: 401
      statusText: ""
    }
*/

export default store => next => action => {
  const {
    payload,
    type, //eg:- type: "PROJECTS_RECENT_CHECKINS_FAILURE"
    error, //eg:- error: true
    meta //contains data provided in actions
  } = action;

  if (error) {
    console.log("Api Error:", action);

    if (payload && payload.name === "RequestError") {
      //Request error occurs when there is some malformed input at our end
      //like if we use body and set the method as "GET"
      //Also there won't be any faliure event fired for this error
      const { dispatch } = store;

      if (!isEmpty(payload.message))
        handleApiDefaultError(payload, action, dispatch, payload.message);
      else
        handleApiDefaultError(
          payload,
          action,
          dispatch,
          "Oops Something went Wrong"
        );
    } else if (payload && payload.name === "ApiError") {
      if (action.payload.status === 401) {
        const { dispatch } = store;

        handleApiDefaultError(
          payload,
          action,
          dispatch,
          "Oops Something went Wrong"
        );

        if (meta && !payload.response)
          apiErrorAction(dispatch, "OOPs Something went wrong");
        else {
          // TODO Handle Refresh token api call
        }
      } else if (action.payload.status === 404) {
        // browserHistory.push('/404', ['api']);
        // Handle 404 error for apis
      } else if (payload.status === 500) {
        const { dispatch } = store;
        handleApiDefaultError(payload, action, dispatch, "Server Error");
      } else {
        //Handles rest of the error cases: 403, 400
        //could add a switch case to handle only specific error types
        const { dispatch } = store;
        handleApiDefaultError(
          payload,
          action,
          dispatch,
          "Oops something went wrong"
        );
      }
    }
  }

  return next(action);
};

/* --------------------------------------------------Helper Functions------------------------------------------- */

const apiErrorAction = (dispatch, message) => {
  dispatch({
    type: "SHOW_API_ERROR_MESSAGE",
    message: message
  });
};

const showErrorMessageFromApi = (payload, dispatch, errorMessage) => {
  if (!isEmpty(payload.response)) {
    const message = payload.response.message;
    apiErrorAction(dispatch, message);
  } else apiErrorAction(dispatch, errorMessage);
};

/*
Example to override the apiErrorMessage
{type: SUCCESS, apiErrorMessage: 'CustomMessage'}
{type: SUCCESS, showApiErrorMessage: true, apiErrorMessage: 'CustomMessage'} //Same thing as above
{type: SUCCESS, showApiErrorMessage: false}
*/
const handleApiDefaultError = (payload, action, dispatch, errorMessage) => {
  if (!isEmpty(action.meta)) {
    const { showApiErrorMessage, apiErrorMessage } = action.meta;
    // Execute the below statement if the showApiErrorMessage isn't provided in the action or
    // if the showApiErrorMessage is provided and the value is true
    if (
      isEmpty(showApiErrorMessage) ||
      (!isEmpty(showApiErrorMessage) && showApiErrorMessage)
    ) {
      //If the api error message is provided from the action then use that
      //Else use the message from the response
      //If no response is provided from the api  then show a default message
      if (!isEmpty(apiErrorMessage)) apiErrorAction(dispatch, apiErrorMessage);
      else showErrorMessageFromApi(payload, dispatch, errorMessage);
    }
  } else showErrorMessageFromApi(payload, dispatch, errorMessage);
};

/* --------------------------------------------------Example errors------------------------------------------- */
/* 
error: true
meta: undefined
payload: {
  message: "422 - "
  name: "ApiError"
  response:{
    cause: "project: Invalid project!"
    code: 422
    httpCode: 422
    message: "Oops, look like some of the fields you passed were invalid."
    status: "failure"
    title: "Malformed Input"
  }
  status: 422
  statusText: ""
}
type: "FEED_FAILURE" 
*/

/* 
error: true
meta: undefined
payload: {
  message: "403 - "
  name: "ApiError"
  response: undefined
  status: 403
  statusText: ""
}
type: "PROJECTS_RECENT_CHECKINS_FAILURE"
*/
