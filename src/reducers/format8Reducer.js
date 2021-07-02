const initialState = "CxHyOz";

const format8Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE": {
      const { InorganicMass, MolMass, Case, Variation, Precipitate } = action.payload;
      const molCO2 = Precipitate / 100;
      let molH2O = 0;
      if (Case === 1) molH2O = (Variation - 44 * molCO2) / 18;

      if (Case === 2) molH2O = (Variation + Precipitate - 44 * molCO2) / 18;

      if (Case === 3) molH2O = (Precipitate - Variation - 44 * molCO2) / 18;

      const molC = molCO2;
      const molH = molH2O * 2;
      const molO = (InorganicMass - molC * 12 - molH * 1) / 16;
      const factor = MolMass / (molC * 12 + molH * 1 + molO * 16);
      let result = "C" + parseInt(molC * factor) +
                   "H" + parseInt(molH * factor);
      if (molO > 0) result += "O" + parseInt(molO * factor);
      return result;
    }
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default format8Reducer;
