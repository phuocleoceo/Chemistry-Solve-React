import Decimal from 'decimal.js';

const initialState = {
	comment: "",
	Al_OH3: 0,
	AlO2_Minus: 0,
	Al_3Plus_Remnant: 0,
	OH_Minus_Remnant: 0,
};

const format4Reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CALCULATE_4": {
			const Al_3Plus = new Decimal(action.payload.Al_3Plus);
			const OH_Minus = new Decimal(action.payload.OH_Minus);
			const T = OH_Minus.dividedBy(Al_3Plus);
			let commentValue = "";
			let AlOH3 = 0;
			let AlO2Minus = 0;
			let Al3PlusRemnant = 0;
			let OHMinusRemnant = 0;
			if (T.lessThan(3)) {
				commentValue = "Al3+ dư, OH- hết , tạo Al(OH)3 kết tủa";
				AlOH3 = OH_Minus.dividedBy(3);
				Al3PlusRemnant = Al_3Plus.minus(OH_Minus.dividedBy(3));
				AlO2Minus = 0;
				OHMinusRemnant = 0;
			} else if (T.equals(3)) {
				commentValue = "Al3+ và OH- phản ứng vừa đủ, tạo Al(OH)3 kết tủa cực đại";
				AlOH3 = OH_Minus.dividedBy(3);
				Al3PlusRemnant = 0;
				AlO2Minus = 0;
				OHMinusRemnant = 0;
			} else if (T.lessThan(4)) {
				commentValue = "OH- dư hoà tan 1 phần Al(OH)3 tạo AlO2- rồi mới hết";
				AlOH3 = Al_3Plus.times(4).minus(OH_Minus);
				Al3PlusRemnant = 0;
				AlO2Minus = Al_3Plus.minus(AlOH3);
				OHMinusRemnant = 0;
			} else if (T.equals(4)) {
				commentValue = "OH- dư hoà tan hết Al(OH)3 thành AlO2- rồi hết";
				AlOH3 = 0;
				Al3PlusRemnant = 0;
				AlO2Minus = Al_3Plus;
				OHMinusRemnant = 0;
			} else {
				commentValue = "OH- dư hoà tan hết Al(OH)3 thành AlO2- và vẫn dư";
				AlOH3 = 0;
				Al3PlusRemnant = 0;
				AlO2Minus = Al_3Plus;
				OHMinusRemnant = OH_Minus.minus(Al_3Plus.times(4));
			}
			return {
				comment: commentValue,
				Al_OH3: AlOH3,
				AlO2_Minus: AlO2Minus,
				Al_3Plus_Remnant: Al3PlusRemnant,
				OH_Minus_Remnant: OHMinusRemnant,
			};
		}
		case "RESET_STATE_4":
			return initialState;
		default:
			return state;
	}
};

export default format4Reducer;
