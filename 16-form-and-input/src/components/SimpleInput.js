import { useState } from 'react';

const SimpleInput = (props) => {
  // Name Input
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // 형식이 맞는지
  const enteredNameIsValid = enteredName.trim() !== '';
  // 입력이 맞는지
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // Email Input
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // 비어있는지 확인
  const emailInputIsEmpty = enteredEmail.trim() === '';
  let emailInputIsValid = Array.from(enteredEmail.trim()).includes('@');
  const emailInputIsInvalid =
    (emailInputIsEmpty || !emailInputIsValid) && enteredEmailTouched;

  let formIsValid = enteredNameIsValid && emailInputIsInvalid ? true : false;

  // Name Input Handler
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  // Email Input Handler
  const emailInputChangeHandler = (event) => {
    emailInputIsValid = Array.from(enteredEmail.trim()).includes('@');
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    const emailInputIsEmpty = enteredEmail.trim() === '';
    setEnteredEmailTouched(true);
  };

  // Form Submit Handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    // 기본 유효성 검사 : 빈칸일때
    if (enteredName.trim() === '') {
      // setEnteredNameIsValid(false);
      return;
    }

    setEnteredName('');
    // touched 값을 초기화하여 nameInputIsValid값도 false로 되면 폼을 제출했을 때 에러메세지가 뜨지 않는다
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsEmpty && enteredEmailTouched && (
          <p className="error-text">Email must not be empty.</p>
        )}
        {!emailInputIsEmpty && !emailInputIsValid && enteredEmailTouched && (
          <p className="error-text">Email must contain '@'.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
