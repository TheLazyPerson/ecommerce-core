// Have check for react.js and react-native from env

const GetBearerToken = store => {
  const {userToken} = store.getState().signInReducer;

  return userToken ? `Bearer ${userToken.access_token}` : '';
};

export default {GetBearerToken};
