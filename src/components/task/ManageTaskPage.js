import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import TaskForm from './TaskForm';

// Consult one task
class ManageTaskPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      // Take a copy of the coming task props, for initializing state
      task: Object.assign({}, this.props.task), // this is the state coming from reducer
      errors: {}
    };

    // binding this for updateTaskState method
    this.updateTaskState = this.updateTaskState.bind(this);
  }

  /**
   * To handle writing inside form inputs/fields
   * @param event
   */
  updateTaskState(event){
    const field = event.target.name; // Mark each form field with its name
    let task = this.state;

    task[field] = event.target.value;
    return this.setState({task: field});
  }

  render() {
    return (
      <TaskForm
        allAuthors={this.props.authors}
        task={this.state.task}
        errors={this.state.errors}
        onChange={this.updateTaskState}
      />
    );
  }
}

ManageTaskPage.propTypes = {
  task: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let task = {id: '', title: '', authorId: '', category: ''};
  // get the authors list
  const authorsFormattedForDropDown = state.authors.map( author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    task: task,
    authors: authorsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);
