import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "./Register.css";
import logo from "../../images/logo.svg";
import useValidation from "../hooks/useValidation";

function Register() {
  const { values, handleChange, errors, isFormValid } = useValidation(); 

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
  }

  return (
    <section className="register">
      <div className="auth__header">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
      </div>
      <Form 
      name="register" 
      buttonText="Зарегистрироваться"
      disabled={isFormValid}
      onSubmit={handleSubmitForm}
      >
        <lable className="form__lable" htmlFor="name">Имя</lable>
        <input
          type="text"
          className="form__input"
          id="name"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          name="name"
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.name || ""}</span>
         <lable className="form__lable" for="email">E-mail</lable>
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
           <lable className="form__lable" for="email">Пароль</lable>
        <input
          className="form__input form__input_type_password"
          required
          type="password"
          minLength={6}
          maxLength={12}
          id="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          ></input>
          <span className="form__error">{errors.password || ""}</span>
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
