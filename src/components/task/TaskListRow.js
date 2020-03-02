import React, {PropTypes} from 'react';
import {Link} from 'react-router';

/**
 * This is a stateless functional component
 * this handle each rows inside the list
 *
 * @param task
 * @returns {XML}
 * @constructor
 */
const TaskListRow = ({task}) => {
  return (
    <tr>
      <td><a href={task.watchHref} target="_blank">Go</a></td>
      <td><Link to={'/task/' + task.id}>{task.title}</Link></td>
      <td>{task.authorId}</td>
      <td>{task.category}</td>
    </tr>
  );
};

TaskListRow.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskListRow;
