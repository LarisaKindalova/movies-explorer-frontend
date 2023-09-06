import React from "react";
import "./Portfolio.css";

function Portfolio () {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio_item">
          <a className="portfolio__link link" href="https://github.com/LarisaKindalova/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
          <span className="profile__arrow">↗</span>
        </li>
        <li className="portfolio_item">
          <a className="portfolio__link link" href="https://github.com/LarisaKindalova/russian-travel"  target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <span className="profile__arrow">↗</span>
        </li>
        <li className="portfolio_item">
          <a className="portfolio__link link" href="https://github.com/LarisaKindalova/react-mesto-api-full-gha" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <span className="profile__arrow">↗</span>
        </li>
      </ul>

    </section> 
  )
}
export default Portfolio;