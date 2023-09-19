import React, {useState } from 'react';
import "./Navigation.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import  profile_promo from "../../images/profile_promo.svg";
import profile from "../../images/profile.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation () {
  const [isBurgerMenuOpen, setBurgerMenuOpen]= useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };
  return (
    <>
    <nav className="navigation">
        <NavLink to="/movies" className={({isActive}) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={({isActive}) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}>Сохранённые фильмы</NavLink>
      <nav className="navigation__profile">
        <Link to="/profile" className="navigation__profile-link link">
          <img className="navigation__profile-btn" src={location.pathname === "/" ? profile_promo : profile} alt="Кнопка входа в аккаунт" />
        </Link>
      </nav>
    </nav>
     <button 
        className="header__burger button"
        type="button"
        onClick={toggleMenu}
      ></button>
    {isBurgerMenuOpen && <BurgerMenu onClose={toggleMenu}/>}
  </>
);
}

export default Navigation;