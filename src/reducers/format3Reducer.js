import Decimal from 'decimal.js';

const initialState = {
  Fe_Mass: 0,
  mol_HNO3: 0,
};

const format3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE_3": {
      const OxideMass = new Decimal(action.payload.OxideMass);
      const molNO = new Decimal(action.payload.molNO).dividedBy(22.4);
      const molNO2 = new Decimal(action.payload.molNO2).dividedBy(22.4);
      const molN2O = new Decimal(action.payload.molN2O).dividedBy(22.4);
      const molN2 = new Decimal(action.payload.molN2).dividedBy(22.4);
      //const molElectronGas = molNO * 3 + molNO2 * 1 + molN2O * 8 + molN2 * 10;
      const molElectronGas = (molNO.times(3)).plus(molNO2.times(1))
        .plus(molN2O.times(8)).plus(molN2.times(10));
      // gọi a là khối lượng Fe , m là của oxit
      // Bảo toàn e : 3a/56 = (m-a)/16 * 2 + Số mol e từ khí
      // => a = ( m/8 + MolEKhi )*28/5
      const FeMass = OxideMass.dividedBy(8).plus(molElectronGas).times(28).dividedBy(5);
      const molHNO3 = (OxideMass.minus(FeMass).dividedBy(16).times(2)).plus(molNO.times(4))
        .plus(molNO2.times(2)).plus(molN2O.times(10)).plus(molN2.times(12));
      // const FeMass = ((OxideMass / 8 + molElectronGas) * 28) / 5;
      // const molHNO3 = ((OxideMass - FeMass) / 16) * 2 + molNO * 4
      //   + molNO2 * 2 + molN2O * 10 + molN2 * 12;
      return {
        Fe_Mass: FeMass,
        mol_HNO3: molHNO3,
      };
    }
    case "RESET_STATE_3":
      return initialState;
    default:
      return state;
  }
};

export default format3Reducer;
