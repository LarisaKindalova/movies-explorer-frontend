import React from 'react';
import logo from '../../images/logo.svg';
import "./Header.css";
import Navigation  from '../Navigation/Navigation';
import { Link, useLocation} from 'react-router-dom';


function Header () {

  const location = useLocation();

  return (
    <header className= {`header 
    header_promo ${location.path === "/" ? "header_promo" : ""}}`}>
      <Link to="/"> 
        <img  className="header__logo link" src={logo} alt="Логотип"></img>
      </Link>
      <Navigation />
{/* <nav className="nav__auth">
//   <ul className="nav__auth-links">
//     <li className="nav__auth-link">Регистрация</li>
//     <li className="nav__auth-btn">Войти</li>
//   </ul>
// </nav> */}
    </header>
  )
}

export default Header;