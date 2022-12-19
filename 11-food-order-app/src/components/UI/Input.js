import React from 'react';
import classes from './Input.module.css';

// 사용자 지정 컴포넌트에서는 Ref를 바로 사용할 수 없으므로
// forwardRef로 감싸준다. (컴포넌트 함수는 forwardRef의 인수가 된다)
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
