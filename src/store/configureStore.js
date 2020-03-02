/********************Imports*************************/

// this createStore method will allow us to create the store
// applyMiddleware will let us use some optional features
import {createStore, applyMiddleware} from 'redux';

// we import our reducers to allow them to connect with our store
import rootReducer from '../reducers';

// this is optional: it will enhance immutablility use in Redux
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// This is for enabling AJAX calls / use mock APIs
import thunk from 'redux-thunk';

/********************Functions*************************/

// this is the configuration function of our store, it is the entry point of the application
// this function might accept one parameter which is the initial state
// WARNING: initialState parameter is usefull when using a server-side rendering..
export default function configureStore(initialState) {

  // we need to call the createStore() method to create the store
  // this method will need reducers as parameter so we can move/bring back states between store and reducers
  // WARNING: In our case the createStore method will take 2 parameters and one another as optional parameter.
  return createStore (
    rootReducer, // this is our reducers combined in one root reducer
    initialState, // we already talked about initialState (check the comment above)

    // the next 3rd parameter is optional; it simply helps to enhance the store work
    /*
     * reduxImmutableStateInvariant is a Redux middleware that spits an error on you
     * when you try to mutate your state either inside a dispatch or between dispatches.
     * WARNING: For development use only!
     * NOTE: the reduxImmutableStateInvariant supports immutablility as we have an immutable store.
     * NOTE: the thunk support AJAX calls, it will be used to load data from api
    */
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}

// After configuring this file go to src/index.js file to make use Provider and store property
