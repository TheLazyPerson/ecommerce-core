const message = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return { ...state, say: "Hello World Redux" };

    default:
      return state;
  }
};

export default message;
