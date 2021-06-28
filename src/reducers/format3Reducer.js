const initialState = {
  Fe_Mass: 0,
  mol_HNO3: 0,
};

const format3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE": {
      const { OxideMass, molNO, molNO2, molN2O, molN2 } = action.payload;
      const molElectronGas = molNO * 3 + molNO2 * 1 + molN2O * 8 + molN2 * 10;
      // gọi a là khối lượng Fe , m là của oxit
      // Bảo toàn e : 3a/56 = (m-a)/16 * 2 + Số mol e từ khí
      // => a = ( m/8 + MolEKhi )*28/5
      const FeMass = ((OxideMass / 8 + molElectronGas) * 28) / 5;
      const molHNO3 = ((OxideMass - FeMass) / 16) * 2 + molNO * 4 
                      + molNO2 * 2 + molN2O * 10 + molN2 * 12;
      return {
        Fe_Mass: FeMass,
        mol_HNO3: molHNO3,
      };
    }
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default format3Reducer;
