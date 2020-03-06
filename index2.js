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
//  -----------------------------------------CREATE STORE USING REDUX'S CREATESTORE FUNCTION--------------------------------------
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
  store.dispatch({
    type: 'INCREMENT'
  });
});

//----------------------------------------------CREATE STORE FROM SCRATCH------------------------------------------------------------
const createStoreChuong = reducer => {
  let state;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);

    //Unsubscribe OTHER listeners
    return () => {
      listeners.filter(l => l !== listener);
    };
  };

  //Dummy action, to get the initial state through the reducer
  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
};

// //For testing unsubscribe method
// setInterval(() => {
//   console.log('ahihi');
//   store.dispatch({
//     type: 'INCREMENT'
//   });

//   //Unsubscribe
//   let unsubscribe = store.subscribe(render);
//   unsubscribe();
// }, 3000);
