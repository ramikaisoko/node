/********************Imports*************************/

// As our app can hold multiple reducers, we should make a root to combine all our reducers
import {combineReducers} from 'redux';

// When we import a reducer we can call it with any alias that we want
// so thats why we called "tasks" here:
import tasks from './taskReducer';
import authors from './authorReducer';
/********************Constants*************************/

// this is the root reducer
const rootReducer = combineReducers ({
  tasks: tasks, // this is only related to tasks
  authors:authors
});

export default rootReducer;
