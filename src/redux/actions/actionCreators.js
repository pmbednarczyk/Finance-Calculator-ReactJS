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

export function addExpense() {
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

export function changePrice(event, i) {
  return {
    type: 'CHANGE_PRICE',
    event,
    i,
  };
}

export function changeFrequency(event, i) {
  return {
    type: 'CHANGE_FREQUENCY',
    event,
    i,
  };
}

export function changePeriod(event, i) {
  return {
    type: 'CHANGE_PERIOD',
    event,
    i,
  };
}

export function changeName(event, i) {
  return {
    type: 'CHANGE_NAME',
    event,
    i,
  };
}

export function countExpenses() {
  return {
    type: 'COUNT_EXPENSES',
  };
}
