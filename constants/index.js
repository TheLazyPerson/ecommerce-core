// TODO have env checks for react-native and react.js

// const production = {
//   API_URL: "http://ec2-15-206-82-110.ap-south-1.compute.amazonaws.com",
//   SENTRY_KEY: "",
//   SENTRY_APP: "",
//   API_CLIENT_ID: "1",
//   API_CLIENT_SECRET: ""
// };

// const development = {
//   API_URL: "http://ec2-15-206-82-110.ap-south-1.compute.amazonaws.com",
//   SENTRY_KEY: "",
//   SENTRY_APP: "",
//   API_CLIENT_ID: "1",
//   API_CLIENT_SECRET: "",
//   PUSHER_APP_KEY: ""
// };

const { 
  REACT_APP_API_URL,
  REACT_APP_SENTRY_APP,
  REACT_APP_SENTRY_KEY,
  REACT_APP_API_CLIENT_ID,
  REACT_APP_API_CLIENT_SECRET
} = process.env;



const API_VERSION = "api/v1";
export const IS_WEB = process.env.IS_WEB === "true";

export const API_URL = REACT_APP_API_URL;
export const API_ROOT = `${API_URL}/${API_VERSION}`;

export const SENTRY_KEY = REACT_APP_SENTRY_KEY;
export const SENTRY_APP = REACT_APP_SENTRY_APP;
export const API_LOAD_MORE_LIMIT = 20;
export const LOGIN_API_CONSTANTS = {
  client_id: REACT_APP_API_CLIENT_ID,
  client_secret: REACT_APP_API_CLIENT_SECRET
};

//platform keys
export const Build = 100;
export const platform = IS_WEB ? "web" : "react-native";
