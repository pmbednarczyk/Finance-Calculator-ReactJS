const TEST1 = 'spendings/TEST1';
const TEST2 = 'spendings/TEST2';

const initialState = {
  value: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TEST1: {
      return { ...state, value: +action.newValue };
    }
    case TEST2: {
      return { ...state, value: -action.newValue };
    }
    default:
      return state;
  }
}

export const increaseValue = newValue => ({
  type: TEST1,
  newValue,
});

export const decreaseValue = newValue => ({
  type: TEST2,
  newValue,
});
