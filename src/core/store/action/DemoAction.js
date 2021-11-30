export const incrementNumber = () => {
  return {
    type: 'INCREMENT',

  };
}; // ES6 pattern

export const decrementNumber = (val) => {
  return {
    type: 'DECREMENT',
    value:val,
  };
};
