import Decimal from 'decimal.js';

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
		case "CALCULATE_2": {
			const molCO2 = new Decimal(action.payload.molCO2).dividedBy(22.4);
			const VBazo = new Decimal(action.payload.VBazo);
			const molNaOH = new Decimal(action.payload.molNaOH).times(VBazo);
			const molKOH = new Decimal(action.payload.molKOH).times(VBazo);
			const molBaOH2 = new Decimal(action.payload.molBaOH2).times(VBazo);
			const molCaOH2 = new Decimal(action.payload.molCaOH2).times(VBazo);
			//const molOH = molNaOH + molKOH + molBaOH2 * 2 + molCaOH2 * 2;
			const molOH = molNaOH.plus(molKOH).plus(molBaOH2.times(2)).plus(molCaOH2.times(2));
			//const T = molOH / molCO2;
			const T = molOH.dividedBy(molCO2);
			// calculate
			let commentValue = "";
			let OHMinusRemnant = 0;
			let CO2Remnant = 0;
			let HCO3Minus = 0;
			let CO32Minus = 0;
			//OH- + CO2 => HCO3- , OH- hết
			if (T.lessThanOrEqualTo(1)) {
				commentValue = "Phản ứng chỉ tạo HCO3-, không kết tủa";
				OHMinusRemnant = 0;
				CO2Remnant = molCO2.minus(molOH);
				HCO3Minus = molOH;
				CO32Minus = 0;
			}
			//OH- + CO2 => HCO3-
			//2OH- + CO2 => CO3(2-) + H2O
			else if (T.lessThan(2)) {
				commentValue = "Phản ứng tạo hỗn hợp HCO3- và (CO3)2-";
				OHMinusRemnant = 0;
				CO2Remnant = 0;
				const molCO3 = molOH.minus(molCO2);
				HCO3Minus = molCO3;
				CO32Minus = molCO2.minus(molCO3);
			}
			// 2OH- + CO2 => CO3(2-) + H2O
			else {
				commentValue = "Phản ứng chỉ tạo (CO3)2-";
				OHMinusRemnant = molOH.minus(molCO2.times(2));
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
		case "RESET_STATE_2":
			return initialState;
		default:
			return state;
	}
};

export default format2Reducer;
