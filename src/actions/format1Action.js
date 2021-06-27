export const calculateSalt = (input) => {
    return {
        type: 'CALCULATE_SALT',
        payload: input
    };
};