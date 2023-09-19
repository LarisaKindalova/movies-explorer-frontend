import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
      <h2 className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__wrap">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__liks">
          <li>
            <a className="footer__link link" href="https://practicum.yandex.ru">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link link"
              href="https://github.com/LarisaKindalova"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
