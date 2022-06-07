//@ts-check

import { useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // // const [isValid, setIsValid] = useState(false);
  // const [isTouched, setIsTouched] = useState(false);
  // //const [formIsValid, setFormIsValid] = useState(false);
  const inputRef = useRef();

  // const enteredNameIsValid = enteredName.trim() != '';
  // const isInputValid = !enteredNameIsValid && isTouched;
  // let formIsValid = false;

  // // useEffect(() => {
  // //   if (enteredNameIsValid) {
  // //     setFormIsValid(true);
  // //   } else {
  // //     setFormIsValid(false);
  // //   }

  // // }, [enteredNameIsValid]);

  // if (enteredNameIsValid) {
  //   formIsValid = true;
  // }
  // const nameInputChangeHandler = (e) => {
  //   setEnteredName(e.target.value);

  //   setIsTouched(true);

  //   // this is not going to work -> setting the state is not done in this function but scheduled.
  //   // if (enteredName.trim() != '') {
  //   //   setIsValid(true);
  //   // }

  //   // if (e.target.value.trim() != '') {
  //   //   setIsValid(true);
  //   // }
  // }

  // const inputBlurHandler = (e) => {
  //   setIsTouched(true);
  // }

  // const formSubmissionHandler = (e) => {
  //   e.preventDefault();

  //   setIsTouched(true);

  //   if (!enteredNameIsValid) {
  //     return;
  //   }

  //   console.log(enteredName);
  //   console.log(inputRef.current.value);
  //   // resetting the value -> not as elegant with refs
  //   setEnteredName('');
  //   setIsTouched(false);
  //   // directly manipulating the DOM -> not ideal
  //   // inputRef.current.value = '';
  // }

  const { value: enteredName,
    hasError: nameInputHasError,
    valueInputHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
  }

  const nameInputClasses = !nameInputHasError ? 'form-control' : 'invalid form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' value={enteredName} onChange={nameInputHandler} onBlur={nameBlurHandler} />
      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button disabled={nameInputHasError}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
