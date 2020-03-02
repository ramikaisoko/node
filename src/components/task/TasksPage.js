/********************Imports*************************/

import React, {PropTypes} from 'react';

// connect() method is the tool that will let us connect react components to redux store
import {connect} from 'react-redux';

// get all actions from taskActions file (taskAction)
import * as taskActions from '../../actions/taskActions';

// After making the mapDispatchToProps function, we can make it more efficient
import {bindActionCreators} from 'redux';

import TaskList from './TaskList';

/********************Components*************************/

//TODO: Create a new component which will handle creating tasks

/**
 * This component handles the tasks creation
 */
class TasksPage extends React.Component {

   // TODO: use states
   /**
    * this is a constructor
    * here we can initialize the state
    * here we can bind the "this" keyword of some functions
    * (specially those who handle events)
    */
    constructor(props,context) {
      super(props,context);
    }

    /**
      * return task list item
      * the list is going to be handled by reducer and then mapped with map()
      */
    taskListItem(task, index){
      return <div key={index}>{task.title}</div>
    }


    /**
      * runder TaskPage component
      */
    render(){
      // use ES6 to pull  tasks from the props
      console.log('this.props', this.props);
      const {tasks} = this.props;

      //debugger; // 4 - test: here comes the new data from redux
      return (
        <div>
          <h1>Tasks</h1>
          {/*NOTE: Here, we are calling data after being handled by the reducer*/}
          {/*this.props.tasks.map(this.taskListItem)*/}
          <TaskList tasks={tasks}/>
        </div>
      );
    }
}

/**
  * testing the props of TaskPage component via PropTypes
  */
TasksPage.propTypes = {
  //dispatch: PropTypes.func.isRequired, // this is no more required cause we already have it in this file
  tasks: PropTypes.array.isRequired, // tasks are going to come from reducers > store > react
  actions: PropTypes.object.isRequired // this is related to mapDispatchToProps function
  //createTask: PropTypes.func.isRequired // this line was replaced with the previous one
}

//export default TasksPage; // this is replaced by the next lines (connect())

// ********** TODO: REDUX implementation *******************


//instead of exporting a plain component,
//we export a component that's decorated by react-redux connect function
// connect function is what we use to create components to ineract with redux
// connect function uses 2 other functions to work
// those 2 functions are: mapStateToProps() and mapDispatchToProps
/*
 * this function takes 2 parameters:
 * state: is the object which is returned from combineReducer() in reducers/index.js
 * ownProps: --NOT NECESSARY NOW--
 * inside this function we return an object that contains the properties
 * that we want to expose to our component as props
 */
function mapStateToProps (state , ownProps){
  //debugger; // 3 - the store tells React (check render method)
    return {
      tasks: state.tasks // NOTE:this is from the reducer root (reducers/index.js)
  };
}

/*
 * this function takes 1 parameter:
 * dispatch: the one which will take us to the action
 * inside this function we return an object that contains the properties
 * that we want to expose to our component as props
 */
function mapDispatchToProps(dispatch){
  return {
    // SOLUTION 1:
    // make one action dispatched
    //createTask: task => dispatch(taskActions.createTask(task))

    // SOLUTION 2:
    // dispatch all the actions
    actions: bindActionCreators(taskActions, dispatch)

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
