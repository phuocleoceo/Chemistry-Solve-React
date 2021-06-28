const initialState = 0;

const format1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE_SALT": {
      const { metalMass, h2Mol, axitType } = action.payload;
      const axitMass = axitType === "HCl" ? h2Mol * 2 * 36.5 : h2Mol * 98;
      return metalMass + axitMass - h2Mol * 2;
    }
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default format1Reducer;
