const initialState = {
  comment: "",
  Na_Plus: 0,
  K_Plus: 0,
  Ba_2Plus: 0,
  Ca_2Plus: 0,
  HCO3_Minus: 0,
  CO3_2Minus: 0,
  OH_Minus_Remnant: 0,
  CO2_Remnant: 0,
};

const format2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE": {
      const { molCO2, molNaOH, molKOH, molBaOH2, molCaOH2 } = action.payload;
      const molOH = molNaOH + molKOH + molBaOH2 * 2 + molCaOH2 * 2;
      const T = molOH / molCO2;
      // calculate
      let commentValue = "";
      let OHMinusRemnant = 0;
      let CO2Remnant = 0;
      let HCO3Minus = 0;
      let CO32Minus = 0;
      //OH- + CO2 => HCO3- , OH- hết
      if (T <= 1) {
        commentValue = "Phản ứng chỉ tạo HCO3-, không kết tủa";
        OHMinusRemnant = 0;
        CO2Remnant = molCO2 - molOH;
        HCO3Minus = molOH;
        CO32Minus = 0;
      }
      //OH- + CO2 => HCO3-
      //2OH- + CO2 => CO3(2-) + H2O
      else if (T < 2) {
        commentValue = "Phản ứng tạo hỗn hợp HCO3- và (CO3)2-";
        OHMinusRemnant = 0;
        CO2Remnant = 0;
        const molCO3 = molOH - molCO2;
        HCO3Minus = molCO3;
        CO32Minus = molCO2 - molCO3;
      }
      // 2OH- + CO2 => CO3(2-) + H2O
      else {
        commentValue = "Phản ứng chỉ tạo (CO3)2-";
        OHMinusRemnant = molOH - molCO2 * 2;
        CO2Remnant = 0;
        HCO3Minus = 0;
        CO32Minus = molCO2;
      }
      return {
        comment: commentValue,
        Na_Plus: molNaOH,
        K_Plus: molKOH,
        Ba_2Plus: molBaOH2,
        Ca_2Plus: molCaOH2,
        HCO3_Minus: HCO3Minus,
        CO3_2Minus: CO32Minus,
        OH_Minus_Remnant: OHMinusRemnant,
        CO2_Remnant: CO2Remnant,
      };
    }
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default format2Reducer;
