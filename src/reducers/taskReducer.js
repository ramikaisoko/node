/********************Imports*************************/
//import {CREATE_TASK} from '../constants/ActionTypes.js';

import {LOAD_TASKS_SUCCESS} from "../constants/ActionTypes";
import initialState from "./initialState";

/********************Functions*************************/

// Our function reducer
// NOTE: the reducer takes 2 params:
// state: current state
// action: an action to update the current state
// NOTE: We initialized the state passed as parameter to an empty array by using ES6 feature
// NOTE: this reducer is going to handle task list.
export default function taskReducer(state = initialState.tasks, action) {

  switch (action.type) {

    //case CREATE_TASK:
    //debugger; // 2 - the store talks with reducer and waits for a response  (check mapStateToProps)

    /* HERE: we return an array
     * The spread operator refering to the current state,
     * the Object.assign() have the new empty object as 1st arg
     * have the new task that will be added to the state array.
     * -> All those elements are going to be mixed together.
    */
    //return [...state, Object.assign({}, action.task)];
    case LOAD_TASKS_SUCCESS:
      return action.tasks;
    default:
      return state;
  }
}
