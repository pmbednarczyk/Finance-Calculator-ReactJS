export function incrementYears() {
  return {
    type: 'INCREMENT_YEARS',
  };
}

export function decrementYears() {
  return {
    type: 'DECREMENT_YEARS',
  };
}

export function addNewExpense() {
  return {
    type: 'ADD_EXPENSE',
  };
}

export function removeExpense(i) {
  return {
    type: 'REMOVE_EXPENSE',
    i,
  };
}
