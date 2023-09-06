import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import profile_foto from '../../images/profile_foto.jpg'


function AboutMe () {

  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__wrap">
        <div className="about-me__info">
          <h3 className="about-me__subtitle">Лариса</h3>
          <p className="about-me__description">Фронтенд-разработчик, 41 лет</p>
          <p className="about-me__block">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link className="about-me__link link" to="https://github.com/LarisaKindalova" target="_blank">Github</Link>
        </div>
        <img className="about-me__foto" src={profile_foto} alt="Фото разработчика"  />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;