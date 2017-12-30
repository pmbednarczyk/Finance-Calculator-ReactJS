const initialState = {
  userYears: 10,
};

function calculator(state = initialState, action = {}) {
  switch (action.type) {
    case 'INCREMENT_YEARS':
      console.log('INCREMENT_YEARS' + state.userYears);
      return { ...state, userYears: state.userYears + 1 };
    case 'DECREMENT_YEARS':
      console.log('INCREMENT_YEARS');
      return { ...state, userYears: state.userYears - 1 };
    default:
      return state;
  }
}

export default calculator;
