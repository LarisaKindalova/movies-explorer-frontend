import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const isLoggedIn = true;
  const location = useLocation();


  return (
    <header
      className={`header ${location.pathname === "/" ? "header_promo" : ""}`}
    >
      <div className="header__container">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
        {isLoggedIn ? (
          <Navigation />
        ) : (
          <nav className="header__auth">
            <Link to="/signup" className="header__register link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__login button">
              Войти
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
