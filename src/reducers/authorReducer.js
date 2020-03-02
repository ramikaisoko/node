/********************Imports*************************/
//import {CREATE_TASK} from '../constants/ActionTypes.js';

import {LOAD_AUTHORS_SUCCESS} from "../constants/ActionTypes";
import initialState from "./initialState";

/********************Functions*************************/

// Our function reducer
// NOTE: the reducer takes 2 params:
// state: current state
// action: an action to update the current state
// NOTE: We initialized the state passed as parameter to an empty array by using ES6 feature
// NOTE: This reducer is going to handle authors list.
export default function authorReducer(state = initialState.authors, action) {

  switch (action.type) {

    //debugger; // 2 - the store talks with reducer and waits for a response  (check mapStateToProps)

    case LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}

