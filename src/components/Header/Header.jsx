import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

function Header({isLoggedIn}) {
  const location = useLocation();


  return (
    <header
      className={`header ${location.pathname === "/" ? "header_place_landing" : ""}`}
    >
      <div className="header__container">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
        {isLoggedIn ? (
          <Navigation />
        ) : (
          <nav className="header__auth">
            <Link to="/signup" className=" header__link header__link_type_register link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link header__link_type_login button">
              Войти
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
