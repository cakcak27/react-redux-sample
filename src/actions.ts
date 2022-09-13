export const type = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export const incrementNumber = () => {
  return {
    type: type.INCREMENT,
  };
};

export const decrementNumber = () => {
  return {
    type: type.DECREMENT,
  };
};
