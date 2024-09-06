import React from 'react';
import classes from './Checkbox.module.scss';

const Checkbox = ({ label, name, checked, error, onChange }) => {
  const handleChange = (e) => {
    onChange(name, e.target.checked);
  };

  return (
    <div className={classes.checkbox}>
      <label htmlFor={name}>
        <input 
          id={name}
          type="checkbox" 
          checked={checked} 
          onChange={handleChange} 
        />
        {label} 
        <a href="/terms" target="_blank">Terms and Privacy Policy</a>
      </label>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default Checkbox;
