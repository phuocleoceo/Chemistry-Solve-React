const initialState = 0;

const format1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CALCULATE_SALT': {
            return state;
        }
        default:
            return state;
    }
}

export default format1Reducer;