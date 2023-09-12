import React from "react";
import "./Profile.css";
// import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__input-wrap">
            <lable className="profile__lable" for="name">
              Имя
            <input
              type="text"
              className="profile__input"
              id="name"
              required
              placeholder="Имя"
              minLength={2}
              maxLength={40}
              />
            <span className="form__error form__error_profile"></span>
              </lable>
          </div>
          <div className="profile__input-wrap">
            <lable className="profile__lable" for="email">
              E-mail
            <input
              className="profile__input"
              required
              type="email"
              id="email"
              placeholder="E-mail"
              name="email"
              >
            </input>
            <span className="form__error form__error_profile"></span>
           </lable>
          </div>
        </form>
        <div className="profile__wrap">
          <button className="profile__button button">Редактировать</button>
          <Link to="/" className="profile__link link">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
