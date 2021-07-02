const initialState = "CxHyOz";

const format8Reducer = (state = initialState, action) => {
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

export default format8Reducer;
