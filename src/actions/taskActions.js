/********************Imports*************************/

// we need to import the type of actions from constants/ActionConstants
//import {CREATE_TASK} from '../constants/ActionConstants';

import courseApi from '../api/mockTaskApi';
import {LOAD_TASKS_SUCCESS} from "../constants/ActionTypes";

/********************Components*************************/

/**
  * this is an action creator, it will be called once React states passed to redux as props
  * the action type here is CREATE_TASK
  */
/*
export function createTask(task) {
  //debugger; // NOTE: 1 - Action passed to the store (check reducer now)
  return {
    type: CREATE_TASK, // the action type is required
    task: task // this rest is up to us (object, array, number..whatever)
  }
}
// NOTE: If you finished writing this first function that mean we did it
// We sucessfuly made an action creator function
// NEXT STEP: create a reducer
*/

export function loadTasksSuccess(tasks) {
  //debugger; // NOTE: 1 - Action passed to the store (check reducer now)
  return {
    type: LOAD_TASKS_SUCCESS, // the action type is required
    tasks: tasks // this rest is up to us (object, array, number..whatever we like)
  }
}

export function loadTasks (){
  return function(dispatch){
    return courseApi.getAllCourses().then(tasks => {
      dispatch(loadTasksSuccess(tasks));
    }).catch(error => {
      throw(error);
    });
  };
}
