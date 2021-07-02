const initialState = {
  C2H5OH: 0,
  CO2: 0
};

const format7Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE": {
      const { GlucozoMass, Efficiency } = action.payload;
      const molGlucozo = (GlucozoMass / 180) * (Efficiency / 100);
      return {
        C2H5OH: 2 * molGlucozo,
        CO2: 2 * molGlucozo
      };
    }
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default format7Reducer;
