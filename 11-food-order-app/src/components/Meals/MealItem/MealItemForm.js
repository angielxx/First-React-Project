import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // useRef로 생성된 ref는 항상 .current를 써야함
    // 해당 ref에 저장된 인풋 요소를 가리킴
    // 항상 value가 있으며 항상 문자열임
    const enteredAmount = amountInputRef.current.value;
    const numberedAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      numberedAmount < 1 ||
      numberedAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddTocart(numberedAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* 사용자 정의 컴포넌트에서는 ref를 바로 사용할 순 없음 */}
      {/* Ref를 사용할 컴포넌트 함수를 React.forwardRef로 감싼다 */}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
