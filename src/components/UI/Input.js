import React from 'react';
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* spread operator will ensure that all props sent will be received in the input */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
