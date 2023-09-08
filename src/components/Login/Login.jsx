import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="login">
      <div className="auth__header">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
      </div>
      <Form name="login" buttonText="Войти">
        <lable className="form__lable" for="email">
          E-mail
        </lable>
        <input
          className="form__input"
          required={true}
          type="email"
          id="email"
          placeholder="Email"
          name="email"
        ></input>
        <lable className="form__lable" for="email">
          Пароль
        </lable>
        <input
          className="form__input form__input_type_password"
          required={true}
          type="password"
          min={6}
          max={12}
          id="password"
          name="password"
        ></input>
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
