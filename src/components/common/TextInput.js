import React, {PropTypes} from 'react';

/**
 * This is a stateless functional component
 * it bring props the TaskForm component
 *
 * @param name
 * @param label
 * @param onChange
 * @param placeholder
 * @param value
 * @param error
 * @returns {XML}
 * @constructor
 */
const TextInput = ({name, label, onChange, placeholder, value, error}) => {

  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {/*the next line is about ternary expression if error === true show that jsx*/}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
