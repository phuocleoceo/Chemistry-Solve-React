export const calculateSalt = (input) => {
    return {
        type: 'CALCULATE_SALT',
        payload: input
    };
};

export const resetState = () => {
    return {
        type: 'RESET_STATE'
    };
};