import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import "./Register.css";
import logo from "../../images/logo.svg";
import useValidation from "../hooks/useValidation";
import * as mainApi from "../../utils/MainApi.jsx";
import {
  MESSAGE_ERROR_REGISTER,
  MESSAGE_ERROR_EMAIL,
  BAD_REQUEST,
  CONFLICT,
  MESSAGE_ERROR_AUTH,
  INTERNAL_SERVER_ERROR,
} from "../../utils/constants";

function Register({ handleLogin }) {
  const { values, handleChange, errors, isFormValid } = useValidation();
  const navigate = useNavigate();
  const [serverError, setServerError] = React.useState("");

  const handleSubmitRegister = evt => {
    evt.preventDefault();
    const { name, email, password } = values;
    mainApi
      .register({ name, email, password })
      .then(data => {
        handleLogin({ email, password });
        navigate("/movies");
      })
      .catch(err => {
        if (err.status === BAD_REQUEST) {
          return setServerError(MESSAGE_ERROR_REGISTER);
        }
        if (err.status === CONFLICT) {
          return setServerError(MESSAGE_ERROR_EMAIL);
        }
        if (err.status === INTERNAL_SERVER_ERROR) {
          return setServerError(MESSAGE_ERROR_AUTH);
        }
        setServerError(MESSAGE_ERROR_REGISTER);
      });
  };

  return (
    <main className="register">
      <div className=" header header_auth">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
      </div>
      <div className="auth">
        <h1 className="auth__title">Добро пожаловать!</h1>
        <Form
          name="register"
          button="register"
          buttonText="Зарегистрироваться"
          disabled={!isFormValid}
          onSubmit={handleSubmitRegister}
        >
          <label className="form__lable" htmlFor="name">
            Имя
          </label>
          <input
            className="form__input input"
            required
            type="text"
            id="name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            name="name"
            pattern="[a-zA-Zа-яА-Я\-\s]+"
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="form__error">{errors.name || ""}</span>
          <label className="form__lable" htmlFor="email">
            E-mail
          </label>
          <input
            className="form__input input"
            required
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
          ></input>
          <span className="form__error">{errors.email || ""}</span>
          <label className="form__lable" htmlFor="email">
            Пароль
          </label>
          <input
            className="form__input form__input_type_password input"
            required
            type="password"
            minLength={6}
            maxLength={12}
            id="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            autoComplete="off"
          ></input>
          <span className="form__error">{errors.password || ""}</span>
          <span className="form__error form__error_type_subbmit">
            {serverError}
          </span>
        </Form>
        <div className="auth__sign">
          <p className="auth__subtitle">Уже зарегистрированы?</p>
          <Link to="/signin" className="auth__link link">
            Войти
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Register;
