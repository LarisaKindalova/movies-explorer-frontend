import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound () {

  const navigate = useNavigate();

  function hadleGoBack() {
    navigate(-1)
  }

  return (
    <section className="not-found">
     <h2 className="not-found__title">404
     </h2>
     <span className="not-found__message">
      Страница не найдена</span>
     <button 
     className="not-found__button button"
     onClick={hadleGoBack}>Назад</button>
    </section>
  )
}

export default NotFound;