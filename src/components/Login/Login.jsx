import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "./Login.css";
import logo from "../../images/logo.svg";
import useValidation from "../hooks/useValidation";

function Login() {
  const { values, handleChange, errors, isFormValid } = useValidation(); // диструктуризируем useValidation
  
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
  }

  return (
    <section className="login">
      <div className="auth__header">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
      </div>
      <Form 
      name="login" 
      button="login"
      buttonText="Войти" 
      disabled={isFormValid}
      onSubmit={handleSubmitForm}>
        <lable className="form__lable" htmlFor="email">
          E-mail
        </lable>
        <input
          className="form__input"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        ></input>
        <span className="form__error">{errors.email || ""}</span>
        <lable className="form__lable" htmlFor="email">
          Пароль
        </lable>
        <input
          className="form__input form__input_type_password"
          type="password"
          minLength={6}
          maxLength={12}
          id="password"
          name="password"
          placeholder="Password"
          value={values.password || ""}
          onChange={handleChange}
        ></input>
        <span className="form__error">{errors.password}</span>
      </Form>
      <div className="auth__sign">
        <p className="auth__subtitle">Ещё не зарегистрированы?</p>
        <Link to="/sign-up" className="auth__link link">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
