import { useState } from "react";

const useInput = (validateFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateFunc(enteredValue);
  const inputInvalid = isTouched && !isValid;

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isTouched,
    isValid,
    inputInvalid,
    changeHandler,
    blurHandler,
    reset,
  };
};
export default useInput;
