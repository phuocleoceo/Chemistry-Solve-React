import Decimal from 'decimal.js';

const initialState = {
    C2H5OH: 0,
    CO2: 0
};

const format7Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CALCULATE_7": {
            const GlucozoMass = new Decimal(action.payload.GlucozoMass);
            const Efficiency = new Decimal(action.payload.Efficiency);
            const molGlucozo = GlucozoMass.times(Efficiency).dividedBy(18000);
            return {
                C2H5OH: molGlucozo.times(2),
                CO2: molGlucozo.times(2)
            };
        }
        case "RESET_STATE_7":
            return initialState;
        default:
            return state;
    }
};

export default format7Reducer;
