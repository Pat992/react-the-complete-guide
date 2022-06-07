import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueInputHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        valueInputHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;