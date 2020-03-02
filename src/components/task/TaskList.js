import React,{PropTypes} from 'react';
import TaskListRow from './TaskListRow'

/**
 * This is a Stateless functional component to handle the presentation of the tasks list
 *
 * @param tasks (coming from tasksPage as props)
 * @returns {XML}
 * @constructor
 */
const TaskList = ({tasks/*, deleteTask*/}) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Options</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {/*Loop the list and instantiating new row components*/}
        {tasks.map(task =>
          <TaskListRow key={task.id} task= {task}/>
        )}
      </tbody>
    </table>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskList;
