const message = (state = { message: "HELLO WORLD" }, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return state;

    default:
      return state;
  }
};

export default message;
