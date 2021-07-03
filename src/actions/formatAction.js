export const calculate = (id, input) => {
  return {
    type: "CALCULATE_" + id,
    payload: input,
  };
};

export const resetState = (id) => {
  return {
    type: "RESET_STATE_" + id,
  };
};
