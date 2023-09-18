import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import useValidation from "../hooks/useValidation";

function Profile() {
  const { values, handleChange, errors, isFormValid } = useValidation(); // диструктуризируем useValidation
  const [isEditProfile, setEditProfile] = React.useState(false);
  const [isFormEdited, setFormEdited] = React.useState(false);

  function handleChangeProfile() {
    setEditProfile(true);
  }

  function handleInputChange(evt) {
    handleChange(evt);
    setFormEdited(true);
  }

  function handleSubmitProfile(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="form profile__form" onSubmit={handleSubmitProfile}>
          <div className="profile__input-wrap">
            <label className="profile__lable" htmlFor="name">
              Имя
              <input
                type="text"
                className="profile__input input"
                id="name"
                placeholder="Имя"
                name="name"
                minLength={2}
                maxLength={40}
                required
                disabled={!isEditProfile}
                value={values.name || ""}
                onChange={handleInputChange}
              />
              <span className="form__error form__error_profile">
                {errors.name || ""}
              </span>
            </label>
          </div>
          <div className="profile__input-wrap">
            <label className="profile__lable" htmlFor="email">
              E-mail
              <input
                className="profile__input input"
                type="email"
                id="email"
                placeholder="E-mail"
                name="email"
                required
                disabled={!isEditProfile}
                value={values.email || ""}
                onChange={handleInputChange}
                />
              <span className="form__error form__error_profile">
                {errors.email || ""}
              </span>
            </label>
          </div>
        </form>
        <div className="profile__wrap">
          {!isEditProfile ? (
            <button
              className="profile__button button"
              onClick={handleChangeProfile}
            >
              Редактировать
            </button>
          ) : (
            <button
              className="form__submit-button button_type_profile button"
              disabled={!isFormValid || !isFormEdited}
            >
              Сохранить
            </button>
          )}
          <Link to="/" className="profile__link link">
            Выйти из аккаунта
          </Link>
        </div>
      </main>
    </>
  );
}

export default Profile;
