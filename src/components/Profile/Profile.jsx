import React from "react";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import * as mainApi from "../../utils/MainApi.jsx";

import {
  CONFLICT,
  MESSAGE_ERROR_EMAIL,
  MESSAGE_ERROR_AUTH,
  MESSAGE_ERROR_PROFILE,
  MESSAGE_SUCCESS,
  BAD_REQUEST,
} from "../../utils/constants";

function Profile({
  handleUpdateUser,
  setLoggedIn,
}) {
  const {
    values,
    setValues,
    handleChange,
    errors,
    isFormValid,
    setFormValid,
    resetForm,
  } = useValidation();
  const [serverError, setServerError] = React.useState("");

  const [isEditProfile, setEditProfile] = React.useState(false);
  const [isFormEdited, setFormEdited] = React.useState(false);
  const [isMessageSuccessShown, setMessageSuccessShown] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  const navigate = useNavigate();

  function handleChangeProfile() {
    setEditProfile(true);
  }

  function handleInputChange(evt) {
    handleChange(evt);
    setFormEdited(true);
  }

  const valuesChangedInitial =
    values.name !== currentUser.name || values.email !== currentUser.email;

  function handleSubmitProfile(evt) {
    evt.preventDefault();
    mainApi
      .updateUserInfo({ name: values.name, email: values.email })
      .then(user => {
        handleUpdateUser(user.name, user.email);
        setMessageSuccessShown(true);
        setServerError("");
        setFormEdited(false);
      })
      .catch(err => {
        if (err.status === BAD_REQUEST) {
          return setServerError(MESSAGE_ERROR_AUTH);
        }
        if (err.status === CONFLICT) {
          return setServerError(MESSAGE_ERROR_EMAIL);
        }
        setServerError(MESSAGE_ERROR_PROFILE);
      });
  }

  React.useEffect(() => {
    if (errors.email || errors.name) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  React.useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, setValues, resetForm]);

  function signOut() {
    mainApi.logOut().then(() => {
      setLoggedIn(false);
      localStorage.clear();
      navigate("/");
    });
  }

  return (
    //
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form
        className="form profile__form"
        onSubmit={handleSubmitProfile}
        noValidate
      >
        <div className="profile__input-wrap">
          <label className="profile__label" htmlFor="name">
            Имя
            <input
              className="profile__input input"
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              pattern="[a-zA-Zа-яА-Я\-\s]+"
              value={values.name || ""}
              onChange={handleInputChange}
              disabled={!isEditProfile}
              required
            />
            <span className="form__error form__error_profile">
              {errors.name || ""}
            </span>
          </label>
        </div>
        <div className="profile__input-wrap">
          <label className="profile__label" htmlFor="email">
            E-mail
            <input
              className="profile__input input"
              name="email"
              type="email"
              id="email"
              placeholder="E-mail"
              minLength={2}
              maxLength={30}
              pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
              value={values.email || ""}
              onChange={handleInputChange}
              disabled={!isEditProfile}
              required
            />
            <span className="form__error form__error_profile">
              {errors.email || ""}
            </span>
          </label>
        </div>
        <span className="form__error form__error_type_subbmit">
          {serverError}
        </span>
        {isMessageSuccessShown && (
          <span className="form__success">{MESSAGE_SUCCESS}</span>
        )}
        <div className="profile__wrap">
          {isEditProfile && (
            <button
              type="submit"
              className="form__submit-button button_type_profile button"
              disabled={!isFormValid || !valuesChangedInitial || !isFormEdited}
            >
              Сохранить
            </button>
          )}
          {!isEditProfile && (
            <>
              <button
                type="submit"
                className="profile__button button"
                onClick={handleChangeProfile}
              >
                Редактировать
              </button>
              <Link to="/" className="profile__link link" onClick={signOut}>
                Выйти из аккаунта
              </Link>
            </>
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;
