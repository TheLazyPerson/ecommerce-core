
const initialState = {
  showApiErrorMessage: false
}

export default function showApiErrorMessageReducer(state = initialState, action) {
switch (action.type) {
  case 'SHOW_API_ERROR_MESSAGE':
    return {
      showApiErrorMessage: true,
      message: action.message
    }
  case 'HIDE_API_ERROR_MESSAGE':
    return {
      showApiErrorMessage: false        
    }
  default:      
    return state;
}
}
