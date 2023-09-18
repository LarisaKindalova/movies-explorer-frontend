import React from "react";
import "./AboutProject.css";

function AboutProject () {
  return (
    <section className="project" id="project">
      <div className="project__wrap">
      <h2 className="project__title">О проекте</h2>
      <div className="project__list">
        <div className="project__item">
          <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__item">
          <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__table">
      <div className="project__item">
          <p className="project__duration project__duration_black">1 неделя</p>
          <p className="project__text">Back-end</p>
        </div>
        <div className="project__item">
          <p className="project__duration project__duration_gray">4 недели</p>
          <p className="project__text">Front-end</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutProject;