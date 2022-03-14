import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue:nameEnteredValue,
    isTouched:nameIsTouched,
    isValid:nameIsValid,
    inputInvalid:nameInvalid,
    changeHandler:nameChangeHandler,
    blurHandler:nameBlurHandler,
    reset:nameReset,
  } = useInput(input => input.trim() !== '');

  const {
    enteredValue: emailEnteredValue,
    isTouched: emailIsTouched,
    isValid: emailIsValid,
    inputInvalid: emailInvalid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((input) => input.includes('@'));
  
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    nameReset();
    emailReset();
  };


  const nameInvalidClass =
    nameInvalid ? "invalid" : "";
  const emailInvalidClass =
    emailInvalid ? "invalid" : "";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          className={nameInvalidClass}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          type="text"
          id="name"
          value={nameEnteredValue}
        />
        {!nameIsValid && nameIsTouched && (
          <p className="error-text">Input is not valid !</p>
        )}
        <label htmlFor="email">E-mail Adress</label>
        <input
          className={emailInvalidClass}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          id="email"
          value={emailEnteredValue}
        />
        {!emailIsValid && emailIsTouched && (
          <p className="error-text">email is not valid !</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
