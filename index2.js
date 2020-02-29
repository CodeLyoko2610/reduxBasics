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
const { createStore } = Redux; //Require redux-function via browser
//const { createStore } = require('redux'); //Require redux-function when run in Node environment
const store = createStore(counter);

const render = () => {
  //1: getState method of the store
  let currentState = store.getState();
  document.body.innerText = currentState;
};

//3: subscribe method of the store
//callback to be executed whenever an action is dispatched
store.subscribe(render);
render(); //calling render the first time to render the initial state 0

document.addEventListener('click', () => {
  //2: dispatch method of the store
  store.dispatch({ type: 'INCREMENT' });
});
