const initialState = {
  userYears: 10,
  expenses: [
    {
      name: '',
      value: '',
      frequency: 1,
      period: 'per week',
      validationClass: '',
    },
  ],
  showChart: false,
};

function calculator(state = initialState, action = {}) {
  switch (action.type) {
    case 'INCREMENT_YEARS':
      return { ...state, userYears: state.userYears + 1 };
    case 'DECREMENT_YEARS':
      return { ...state, userYears: state.userYears - 1 };
    case 'ADD_EXPENSE': {
      const newExpense = {
        name: '',
        value: '',
        frequency: 1,
        period: 'per week',
        validationClass: '',
      };
      return { ...state, expenses: [...state.expenses, newExpense], showCart: false };
    }
    case 'REMOVE_EXPENSE': {
      if (state.expenses.length > 1) {
        const updatedExpenes = [
          ...state.expenses.slice(0, action.i),
          ...state.expenses.slice(action.i + 1),
        ];
        return { ...state, expenses: updatedExpenes, showCart: false };
      }
    }
    default:
      return state;
  }
}

export default calculator;
