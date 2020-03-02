import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {ButtonToolbar, Button, Popover, OverlayTrigger } from 'react-bootstrap';

/**
 * This is a stateless functional component
 * it brings props about the selected Task component .
 *
 * @param task
 * @param allAuthors
 * @param onSave
 * @param onChange
 * @param saving
 * @param errors
 * @returns {XML}
 * @constructor
 */
const TaskForm = ({task, allAuthors, onSave, onChange, saving, errors}) => {

  return (
    <form className="gly col-md-5" style={{paddingBottom: 100}} enforceFocus={false}>
      <h1>Manage Task</h1>
      <TextInput
        name="title"
        label="Title"
        value={task.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Author"
        value={task.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}/>
        <TextInput
          name="category"
          label="Category"
          value={task.category}
          onChange={onChange}
          error={errors.category}
          />
      <Button
        type="submit"
        disabled={saving}
        bsStyle="primary"
        onClick={onSave}>{saving ? 'Saving...' : 'Save'}</Button>

    </form>
  );
};

TaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default TaskForm;
