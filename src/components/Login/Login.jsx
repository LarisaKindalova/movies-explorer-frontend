import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import "./Login.css";
import logo from "../../images/logo.svg";
import useValidation from "../hooks/useValidation";
import * as mainApi from "../../utils/MainApi.jsx";
import {BAD_REQUEST, UNAUTHORIZED, MESSAGE_ERROR_AUTH, MESSAGE_ERROR_TOKEN, MESSAGE_ERROR_LOGIN } from "../../utils/constants";


function Login({handleLogin }) {
  const { values, handleChange, errors, isFormValid } = useValidation(); // диструктуризируем useValidation
  const [serverError, setServerError] = React.useState("");
  const navigate = useNavigate();

  const valuesInitial =
    values.name !== "" || values.email !== "";

  const handleLoginSubmit = evt => {
    evt.preventDefault();
    const { email, password } = values;
    mainApi.login({ email, password })
      .then(() => {
        handleLogin();
        navigate("/movies", { replace: true });
        handleChange();
      })
      .catch((err) => {
        if (err.status === BAD_REQUEST) {
          setServerError(MESSAGE_ERROR_AUTH);
        } if (err.status === UNAUTHORIZED) {
          return setServerError(MESSAGE_ERROR_TOKEN);
        }  setServerError(MESSAGE_ERROR_LOGIN);
      });
  }


  return (
    <main className="login">
      <div className="header header_auth">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
      </div>
      <div className="auth">
        <h1 className="auth__title">Рады видеть!</h1>
        <Form
          name="login"
          button="login"
          buttonText="Войти"
          disabled={!isFormValid || !valuesInitial}
          onSubmit={handleLoginSubmit}
        >
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
          ></input>
          <span className="form__error">{errors.email || ""}</span>
          <label className="form__lable" htmlFor="email">
            Пароль
          </label>
          <input
            className="form__input form__input_type_password input"
            type="password"
            required
            minLength={6}
            maxLength={12}
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="on"
            value={values.password || ""}
            onChange={handleChange}
          ></input>
          <span className="form__error">{errors.password}</span>
          <span className="form__error form__error_type_subbmit">
            {serverError}
          </span>
        </Form>
        <div className="auth__sign">
          <p className="auth__subtitle">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="auth__link link">
            Регистрация
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
