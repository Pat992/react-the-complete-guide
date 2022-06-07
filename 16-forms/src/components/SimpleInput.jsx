import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const inputRef = useRef();

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === '') {
      return;
    }

    console.log(enteredName);
    console.log(inputRef.current.value);
    // resetting the value -> not as elegant with refs
    setEnteredName('');

    // directly manipulating the DOM -> not ideal
    // inputRef.current.value = '';
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
