//@ts-check
import { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';

// @ts-ignore
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

// useReducer functions
const emailReducer = (snapshot, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: snapshot.value, isValid: snapshot.value.includes('@') };
  }

  return { value: '', isValid: false };
};

const passwordReducer = (snapshot, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: snapshot.value, isValid: snapshot.value.trim().length > 6 };
  }

  return { value: '', isValid: false };
}

const Login = (props) => {
  const context = useContext(AuthContext);
  // ---------------------------------- useReducer for states using multiple vals -----------------------------------------
  // use for: related states/data, complex state updates
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })
  // ---------------------------------------------------------------------------------------------------------------------

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // ---------------------------------- useEffect on every change on email and password ----------------------------------
  // Object-destructoring -> only run useEffect, if isValid has changed, but NOT the value itself
  // use if in use of specific props, or objects
  const { isValid: eIsValid } = emailState;
  const { isValid: pIsValid } = passwordState;

  useEffect(() => {
    // add delay to not run on every keystroke
    const timer = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    // Cleanup function before running useEffect again
    return () => {
      // Clear the timer -> so a new timer will not be added
      clearTimeout(timer);
    };
  }, [pIsValid, eIsValid]);
  // ---------------------------------------------------------------------------------------------------------------------

  const emailChangeHandler = (event) => {
    // @ts-ignore
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid((_) => emailState.isValid && passwordState.isValid);

    // DON'T DO THAT -> no older state in this function
    // setFormIsValid(
    //   enteredEmail.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // @ts-ignore
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid((_) => emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    // @ts-ignore
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    // @ts-ignore
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // @ts-ignore
    context.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
