import { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.length > 0) {
      setIsValid(prevSnapshot => true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(prevSnapshot => false);
      return;
    }
    setIsValid(prevSnapshot => true);
    setEnteredValue(prevSnapshot => '');
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );

  // const FormControl = styled.div`
  // margin: 0.5rem 0;

  // & label {
  //   font-weight: bold;
  //   display: block;
  //   margin-bottom: 0.5rem;
  // }

  // & input {
  //   display: block;
  //   width: 100%;
  //   border: 1px solid #ccc;
  //   font: inherit;
  //   line-height: 1.5rem;
  //   padding: 0 0.25rem;
  // }

  // & input:focus {
  //   outline: none;
  //   background: #fad0ec;
  //   border-color: #8b005d;
  // }

  // &.invalid input {
  //   border-color: red;
  //   background: rgb(255, 188, 188);
  // }

  // &.invalid label {
  //   color: red;
  // }
  // `;

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl className={!isValid && 'invalid'}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;
