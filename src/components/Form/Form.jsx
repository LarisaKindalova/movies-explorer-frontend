import React from "react";
import "./Form.css";

function Form({
  name,
  button,
  children,
  onSubmit,
  buttonText,
  disabled,
}) {

  return (
    <form className={`form form_type_${name}`}>
      {children}
      <button
        type="submit"
        className={`form__submit-button button button_type_${button}`}
        aria-label="кнопка"
        onClick={onSubmit}
        disabled={disabled}
        name={`form__${name}`}
      >
      {buttonText}
      </button>
    </form>
  );
}

export default Form;