const initialState = {};

const format5Reducer = (state = initialState, action) => {
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

export default format5Reducer;
