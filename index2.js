//Reducer counter
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

//Create Store
//const { createStore } = Redux;
const { createStore } = require('redux');
const store = createStore(counter);

//1: getState method of the store
console.log(store.getState());

//2: dispatch method of the store
let increAction = { type: 'INCREMENT' };
store.dispatch(increAction);
console.log(store.getState());
