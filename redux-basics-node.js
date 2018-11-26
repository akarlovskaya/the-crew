// practice redux with node (no react for now) - how to create store with reducer and initial State
// node import syntax:
const redux = require('redux');
const createStore = redux.createStore;

// 1. Create Initial State
const initialState = {
  counter: 0
}

// 2. Create Reducer first - this is just a function with two arguments: current state and action and returns updated state
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    // return new object with copied state and overwrite needed property
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  if ( action.type === 'DECREMENT_COUNTER' ) {
    console.log('ddd');
  }

  return state;
}

// 3. Create new Store by executing createStore function
// we need to pass a reducer to a store - it will update state
const store = createStore(rootReducer);

// 4. Subscription
// subscribe() method takes a function as argument which will be triggered every time when state is updated - when actions reach the reducer
store.subscribe(() => {
  // here is any code we want to execute on state update
  console.log('[Subscription]', store.getState());
})


// 5. Disparching Actions dispatch(action)​
// dispatch function takes one argument: Action Type object with must have 'type' property and optional Payload
store.dispatch({type: 'INCREMENT_COUNTER'});
// you can add more properties to the object:
store.dispatch({type: 'ADD_COUNTER', value: 10});
// or payload property which groups all data you want to pass with the action
store.dispatch({type: 'DECREMENT_COUNTER', payload: {value: 1, name: 'someName'}});




// execute file "node <fileName>"
// console.log(store.getState()); // { counter: 0 }

