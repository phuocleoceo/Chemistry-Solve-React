import Decimal from 'decimal.js';

const initialState = "CxHyOz";

const format8Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE_8": {
      const InorganicMass = new Decimal(action.payload.InorganicMass);
      const MolMass = new Decimal(action.payload.MolMass);
      const Variation = new Decimal(action.payload.Variation);
      const Precipitate = new Decimal(action.payload.Precipitate);
      const molCO2 = Precipitate.dividedBy(100);
      let molH2O = new Decimal(0);
      if (action.payload.Case === 1)
        molH2O = Variation.minus(molCO2.times(44)).dividedBy(18);
      // molH2O = (Variation - 44 * molCO2) / 18;

      if (action.payload.Case === 2)
        molH2O = Variation.plus(Precipitate).minus(molCO2.times(44)).dividedBy(18);
      //molH2O = (Variation + Precipitate - 44 * molCO2) / 18;

      if (action.payload.Case === 3)
        molH2O = Precipitate.minus(Variation).minus(molCO2.times(44)).dividedBy(18);
      //molH2O = (Precipitate - Variation - 44 * molCO2) / 18;

      const molC = molCO2;
      const molH = molH2O.times(2);
      // const molO = (InorganicMass - molC * 12 - molH * 1) / 16;
      const molO = InorganicMass.minus(molC.times(12)).minus(molH.times(1)).dividedBy(16);
      //const factor = MolMass / (molC * 12 + molH * 1 + molO * 16);
      const factor = MolMass.dividedBy((molC.times(12)).plus(molH.times(1)).plus(molO.times(16)));

      let result = "C" + molC.times(factor) + "H" + molH.times(factor);
      if (molO.greaterThan(0)) result += "O" + molO.times(factor);
      return result;
    }
    case "RESET_STATE_8":
      return initialState;
    default:
      return state;
  }
};

export default format8Reducer;
