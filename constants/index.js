// TODO have env checks for react-native and react.js

const IS_PRODUCTION = process.env.APP_ENV == "production"

const production = {
    API_URL: 'http://ec2-15-206-82-110.ap-south-1.compute.amazonaws.com',
    SENTRY_KEY: '',
    SENTRY_APP: '',
    API_CLIENT_ID: '1',
    API_CLIENT_SECRET: '',
}

const development = {
    API_URL: 'http://ec2-15-206-82-110.ap-south-1.compute.amazonaws.com',
    SENTRY_KEY: '',
    SENTRY_APP: '',
    API_CLIENT_ID: '1',
    API_CLIENT_SECRET: '',
    PUSHER_APP_KEY:''
}

const API_VERSION =  "api/v1"
export const IS_WEB = process.env.IS_WEB == "true"

export const API_URL = IS_PRODUCTION ? production.API_URL : development.API_URL
export const API_ROOT = `${API_URL}/${API_VERSION}`

export const SENTRY_KEY= IS_PRODUCTION ? production.SENTRY_KEY : development.SENTRY_KEY
export const SENTRY_APP= IS_PRODUCTION ? production.SENTRY_APP : development.SENTRY_APP
export const API_LOAD_MORE_LIMIT = 20
export const LOGIN_API_CONSTANTS = {
"client_id": IS_PRODUCTION ? production.API_CLIENT_ID: development.API_CLIENT_ID,
"client_secret":  IS_PRODUCTION ? production.API_CLIENT_SECRET: development.API_CLIENT_SECRET
}

//platform keys
export const Build = 100
export const platform = IS_WEB ? 'web' : 'react-native'  