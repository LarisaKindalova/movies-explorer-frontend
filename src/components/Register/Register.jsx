import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="auth__header">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
      </div>
      <Form name="register" buttonText="Зарегистрироваться">
        <lable className="form__lable" for="name">Имя</lable>
        <input
          type="text"
          className="form__input"
          id="name"
          required
          placeholder="Имя"
        />
         <lable className="form__lable" for="email">E-mail</lable>
        <input
          className="form__input"
          required={true}
          type="email"
          id="email"
          placeholder="Email"
          name="email"
        ></input>
           <lable className="form__lable" for="email">Пароль</lable>
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
        <p className="auth__subtitle">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="auth__link link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
