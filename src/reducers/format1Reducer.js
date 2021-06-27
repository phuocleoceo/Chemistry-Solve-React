const initialState = 0;

const format1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CALCULATE_SALT': {
            const { metalMass, axitMass, h2Mol } = action.payload;
            return (metalMass + axitMass - h2Mol * 2);
        }
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
    }
}

export default format1Reducer;