import Decimal from 'decimal.js';

const initialState = 0;

const format1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE_1": {
      const axitType = action.payload.axitType;
      const metalMass = new Decimal(action.payload.metalMass);
      const h2Mol = new Decimal(action.payload.h2Mol);

      const axitMass = (axitType === "HCl") ?
                        h2Mol.times(2).times(36.5) :
                        h2Mol.times(98);
      //return metalMass + axitMass - h2Mol * 2;
      return metalMass.plus(axitMass).minus(h2Mol.times(2));
    }
    case "RESET_STATE_1":
      return initialState;
    default:
      return state;
  }
};

export default format1Reducer;
