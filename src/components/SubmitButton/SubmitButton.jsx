import classes from './SubmitButton.module.scss';
const SubmitButton = ({ label, color }) => {
  return (
    <button className={classes.button} type="submit" style={{ backgroundColor: color }}>
      {label}
    </button>
  );
};

export default SubmitButton;
