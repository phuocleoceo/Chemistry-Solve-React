import Decimal from 'decimal.js';

const initialState = {
	comment: "",
	Al_OH3: 0,
	Al_3Plus: 0,
	AlO2_Minus_Remnant: 0,
	HPlus_Remnant: 0,
};

const format5Reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CALCULATE_5": {
			const AlO2_Minus = new Decimal(action.payload.AlO2_Minus);
			const H_Plus = new Decimal(action.payload.H_Plus);
			const T = H_Plus.dividedBy(AlO2_Minus);
			let commentValue = "";
			let AlOH3 = 0;
			let Al3Plus = 0;
			let AlO2MinusRemnant = 0;
			let HPlusRemnant = 0;
			if (T.lessThan(1)) {
				commentValue = "AlO2- dư, H+ hết, tạo Al(OH)3 kết tủa";
				AlOH3 = H_Plus;
				AlO2MinusRemnant = AlO2_Minus.minus(H_Plus);
				Al3Plus = 0;
				HPlusRemnant = 0;
			} else if (T.equals(1)) {
				commentValue = "AlO2- và H+ phản ứng vừa đủ, tạo Al(OH)3 kết tủa cực đại";
				AlOH3 = H_Plus;
				AlO2MinusRemnant = 0;
				Al3Plus = 0;
				HPlusRemnant = 0;
			} else if (T.lessThan(4)) {
				commentValue = "H+ dư hoà tan 1 phần kết tủa Al(OH)3 thành Al3+ rồi hết";
				AlOH3 = AlO2_Minus.times(4).minus(H_Plus).dividedBy(3);
				//AlOH3 = (4 * AlO2_Minus - H_Plus) / 3;
				AlO2MinusRemnant = 0;
				Al3Plus = AlO2_Minus.minus(AlOH3);
				//Al3Plus = AlO2_Minus - AlOH3;
				HPlusRemnant = 0;
			} else if (T.equals(4)) {
				commentValue = "H+ dư hoà tan hết Al(OH)3 thành Al3+ rồi hết";
				AlOH3 = 0;
				AlO2MinusRemnant = 0;
				Al3Plus = AlO2_Minus;
				HPlusRemnant = 0;
			} else {
				commentValue = "H+ dư hoà tan hết Al(OH)3 thành Al3+ và vẫn dư";
				AlOH3 = 0;
				AlO2MinusRemnant = 0;
				Al3Plus = AlO2_Minus;
				HPlusRemnant = H_Plus.minus(AlO2_Minus.times(4));
				//HPlusRemnant = H_Plus - 4 * AlO2_Minus;
			}
			return {
				comment: commentValue,
				Al_OH3: AlOH3,
				Al_3Plus: Al3Plus,
				AlO2_Minus_Remnant: AlO2MinusRemnant,
				HPlus_Remnant: HPlusRemnant,
			};
		}
		case "RESET_STATE_5":
			return initialState;
		default:
			return state;
	}
};

export default format5Reducer;
