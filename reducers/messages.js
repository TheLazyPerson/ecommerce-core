const message = (
  state = { messageTitle: "Reactive Core Test", message: "HELLO WORLD" },
  action
) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return Object.assign({}, state, {
        messageTitle: "Reactive Core Architecture",
        message: "It Work's... Yay !!!"
      });

    default:
      return state;
  }
};

export default message;
