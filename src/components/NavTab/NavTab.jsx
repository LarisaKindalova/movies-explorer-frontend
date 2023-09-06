import React from "react";
import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab () {
  return (
    <nav className="nav-tab">
      <Link reloadDocument to="#project" className="nav-tab__link link">О проекте</Link>
      <Link reloadDocument to="#techs" className="nav-tab__link link">Технологии</Link>
      <Link reloadDocument to="#" className="nav-tab__link link">Студент</Link>
    </nav>
  )
}

export default NavTab;