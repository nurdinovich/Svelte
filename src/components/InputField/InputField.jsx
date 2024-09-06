import React, { useState } from 'react';
import classes from './InputField.module.scss';

const InputField = ({ label, name, value, type = 'text', required = false, error, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isActive = isFocused || value; 

  return (
    <div className={classes.inputField}>
      <label htmlFor={name} className={isActive ? classes.activeLabel : ''}>
        {label} {required && '*'}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          id={name}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputField;
