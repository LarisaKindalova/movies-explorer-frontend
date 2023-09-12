import React from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../images/profile.svg";
import "./BurgerMenu.css"

function BurgerMenu ({onClose}) {

  return (
    <div className="burger">
      <div className="burger__container">
        <button 
        className="burger_close-btn button " 
        onClick={onClose}/>
        <nav className="burger__navigtion">
          <NavLink to="/" className={({isActive}) => `burger_link  link ${isActive ? "burger_link_active" : ""}`}>Главная</NavLink>
          <NavLink to="/movies" className={({isActive}) => `burger_link link ${isActive ? "burger_link" : ""}`}>Фильмы</NavLink>
          <NavLink to="/" className={({isActive}) => `burger_link link ${isActive ? "burger_link" : ""}`}>Сохранённые фильмы</NavLink>
        </nav>
          <nav className="burger__profile-nav">
          <Link to="#" className="navigation__profile-link link">
            <img className="navigation__profile-btn" src={profile} alt="Кнопка входа в аккаунт" />
          </Link>
        </nav>
    </div>
    </div>
  )
}

export default BurgerMenu;