import React from "react";
import "./Form.css";

function Form({
  name,
  children,
  onSubmit,
  buttonText,
}) {

  return (
    <form className={`form form_type_${name}`}>
      {children}
      <button
        type="submit"
        className="form__submit-button button"
        aria-label="кнопка"
        onClick={onSubmit}
        name={`form__${name}`}
      >
      {buttonText}
      </button>
    </form>
  );
}

export default Form;