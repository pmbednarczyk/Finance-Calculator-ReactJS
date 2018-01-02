const initialState = {
  userYears: 10,
  expenses: [
    {
      name: '',
      price: '',
      frequency: 1,
      period: 'per week',
      valid: false,
    },
  ],
  validation: true,
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
        price: '',
        frequency: 1,
        period: 'per week',
        valid: false,
      };

      return { ...state, expenses: [...state.expenses, newExpense], showChart: false };
    }
    case 'REMOVE_EXPENSE': {
      if (state.expenses.length > 1) {
        const updatedExpenes = [
          ...state.expenses.slice(0, action.i),
          ...state.expenses.slice(action.i + 1),
        ];

        return { ...state, expenses: updatedExpenes, showChart: false };
      }

      return state;
    }
    case 'CHANGE_PRICE': {
      const { i, event } = action;
      let valid = false;

      if (event.target.value > 0 && event.target.value !== '') {
        valid = true;
      }

      const updatedPrice = [
        ...state.expenses.slice(0, i),
        { ...state.expenses[i], price: event.target.value, valid },
        ...state.expenses.slice(i + 1),
      ];

      return { ...state, expenses: updatedPrice, showChart: false, validation: valid };
    }
    case 'CHANGE_FREQUENCY': {
      const { i, event } = action;

      if (event.target.value > 0) {
        const updatedFrequency = [
          ...state.expenses.slice(0, i),
          { ...state.expenses[i], frequency: event.target.value },
          ...state.expenses.slice(i + 1),
        ];

        return { ...state, expenses: updatedFrequency, showChart: false };
      }

      return { ...state };
    }
    case 'CHANGE_PERIOD': {
      const { i, event } = action;
      const updatedPeriod = [
        ...state.expenses.slice(0, i),
        { ...state.expenses[i], period: event.target.value },
        ...state.expenses.slice(i + 1),
      ];

      return { ...state, expenses: updatedPeriod, showChart: false };
    }
    case 'CHANGE_NAME': {
      const { i, event } = action;
      const updatedName = [
        ...state.expenses.slice(0, i),
        { ...state.expenses[i], name: event.target.value },
        ...state.expenses.slice(i + 1),
      ];

      return { ...state, expenses: updatedName };
    }
    case 'COUNT_EXPENSES': {
      const noPrice = state.expenses.some(expense => (
        !expense.valid
      ));

      if (!noPrice) {
        return { ...state, validation: true, showChart: true };
      }

      return { ...state, validation: false, showChart: false };
    }

    default:
      return state;
  }
}

export default calculator;
