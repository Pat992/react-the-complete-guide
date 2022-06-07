import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === '') {
      setIsValid(false);
      return;
    }

    setIsValid(true);

    console.log(enteredName);
    console.log(inputRef.current.value);
    // resetting the value -> not as elegant with refs
    setEnteredName('');

    // directly manipulating the DOM -> not ideal
    // inputRef.current.value = '';
  }

  const nameInputClasses = isValid ? 'form-control' : 'invalid form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
      </div>
      {!isValid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
