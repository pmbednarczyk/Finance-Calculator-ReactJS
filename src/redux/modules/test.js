function test(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing Likes!!');
      return state;
    default:
      console.log('Default incrementing Likes!!');
      return state;
  }
}

// increment
export function increment() {
  return {
    type: 'INCREMENT_LIKES',
  };
}

export default test;
