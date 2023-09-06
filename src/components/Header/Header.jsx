import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className={`header_promo ${location.path === "/" ? "header_promo" : ""}`} >
      <div className="header__container">
        <Link to="/">
          <img className="header__logo link" src={logo} alt="Логотип"></img>
        </Link>
        {/* <Navigation /> */}
        <nav className="nav__auth">
            <Link to="#" className="nav__auth-register link">Регистрация</Link>
            <Link  to="#" className="nav__auth-login button">Войти</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
