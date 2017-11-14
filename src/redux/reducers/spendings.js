const INCREMENT_LIKES = 'spendings/INCREMENT_LIKES';

function spendings(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing Likes!!');
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), // after the one we are updating
      ];
    default:
      return state;
  }
}

export default spendings;

export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  };
}

// export const handlePeriodChange = (event, expense, i) => ({
//   type: SPENDINGPERIODCHANGE,
//   event,
//   expense,
//   i,
// });

// handlePeriodValChange = (event, expense, i) => {
//   const expensesCopy = this.state.expenses.slice();
//   expensesCopy[i].period = event.target.value;
//   this.setState({
//     expenses: expensesCopy,
//   });
// };

