export const calculate = (input) => {
  return {
    type: "CALCULATE",
    payload: input,
  };
};

export const resetState = () => {
  return {
    type: "RESET_STATE",
  };
};
