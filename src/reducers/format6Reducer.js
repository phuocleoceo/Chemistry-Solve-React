const initialState = {
  comment: "",
  CO2: 0,
  HPlus_Remnant: 0,
  HCO3_Minus_Remnant: 0,
  CO3_2Minus_Remnant: 0,
};

const format6Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE": {
      let { HCO3_Minus, CO3_2Minus, H_Plus, Case } = action.payload;
      let commentValue = "";
      let CO2Value = 0;
      let HPlusRemnant = 0;
      let HCO3MinusRemnant = 0;
      let CO3_2MinusRemnant = 0;

      //Trường hợp 1 :
      // H+ + CO3(2-) => HCO3-
      // H+ + HCO3-   => CO2 + H20   HCO3- tổng của phản ứng 1 với đề bài cho
      if (Case === 1) {
        if (H_Plus < CO3_2Minus) {
          commentValue = "H+ hết, CO3(2-) dư, không có khí CO2 thoát ra";
          CO2Value = 0;
          HPlusRemnant = 0;
          HCO3MinusRemnant = H_Plus + HCO3_Minus;
          CO3_2MinusRemnant = CO3_2Minus - H_Plus;
        }
        if (H_Plus === CO3_2Minus) {
          commentValue = "H+ p/ứ vừa đủ CO3(2-), không có CO2 thoát ra";
          CO2Value = 0;
          HPlusRemnant = 0;
          HCO3MinusRemnant = H_Plus + HCO3_Minus;
          CO3_2MinusRemnant = CO3_2Minus - H_Plus;
        }
        H_Plus = H_Plus - CO3_2Minus; // trừ đi phần H+ đã pu với CO3(2-)
        HCO3_Minus = HCO3_Minus + CO3_2Minus; // CO3(2-) chuyển hết thành HCO3-
        if (H_Plus < HCO3_Minus) {
          //CO3(2-) đã chuyển hoá hết thành HCO3-
          commentValue = "H+ p/ứ hết CO3(2-) và 1 phần HCO3-, tạo CO2";
          CO2Value = H_Plus; // 99.99% nH+ dư < nHCO3-
          HPlusRemnant = 0;
          HCO3MinusRemnant = HCO3_Minus - H_Plus;
          CO3_2MinusRemnant = 0;
        }
        if (H_Plus === HCO3_Minus) {
          commentValue = "H+(hết) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
          CO2Value = HCO3_Minus;
          HPlusRemnant = 0;
          HCO3MinusRemnant = 0;
          CO3_2MinusRemnant = 0;
        }
        if (H_Plus > HCO3_Minus) {
          commentValue = "H+(dư) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
          CO2Value = HCO3_Minus;
          HPlusRemnant = H_Plus - HCO3_Minus;
          HCO3MinusRemnant = 0;
          CO3_2MinusRemnant = 0;
        }
      }
      //Trường hợp 2: Xảy ra đồng thời 2 phản ứng
      // HCO3- + H+ => CO2 + H2O
      // CO3(2-) + 2H+ => CO2 + H2O
      // Gọi số mol HCO3- phản ứng là a, CO3(2-) phản ứng là b ta có
      // a/b = nHCO3- / nCO3(2-)  =>  a = b * nHCO3-/nCO3(2-)
      // a + 2b = nH+; =>  b*nHCO3-/nCO3(2-) + 2b = nH+
      // giải tìm b và a => nCO2 = a + b
      else if (Case === 2) {
        if (H_Plus < HCO3_Minus + 2 * CO3_2Minus) {
          commentValue = "H+ p/ứ với cả CO3(2-) và HCO3-, CO2 thoát ra";
          const CO3_React = H_Plus / (HCO3_Minus / CO3_2Minus + 2);
          const HCO3_React = (CO3_React * HCO3_Minus) / CO3_2Minus;
          CO2Value = HCO3_React + CO3_React;
          HPlusRemnant = 0;
          HCO3MinusRemnant = HCO3_Minus - HCO3_React;
          CO3_2MinusRemnant = CO3_2Minus - CO3_React;
        }
        if (H_Plus === HCO3_Minus + 2 * CO3_2Minus) {
          commentValue = "H+(hết) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
          CO2Value = HCO3_Minus + CO3_2Minus;
          HPlusRemnant = 0;
          HCO3MinusRemnant = 0;
          CO3_2MinusRemnant = 0;
        }
        if (H_Plus > HCO3_Minus + 2 * CO3_2Minus) {
          commentValue = "H+(dư) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
          CO2Value = HCO3_Minus + CO3_2Minus;
          HPlusRemnant = H_Plus - (HCO3_Minus + 2 * CO3_2Minus);
          HCO3MinusRemnant = 0;
          CO3_2MinusRemnant = 0;
        }
      }
      return {
        comment: commentValue,
        CO2: CO2Value,
        HPlus_Remnant: HPlusRemnant,
        HCO3_Minus_Remnant: HCO3MinusRemnant,
        CO3_2Minus_Remnant: CO3_2MinusRemnant,
      };
    }
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default format6Reducer;
