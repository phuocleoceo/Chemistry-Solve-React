const initialState = {};

const format6Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE": {
      return state;
    }
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default format6Reducer;
