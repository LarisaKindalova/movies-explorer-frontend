import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound () {

  const navigate = useNavigate();

  function hadleGoBack() {
    navigate(-1)
  }

  return (
    <main className="not-found">
     <h1 className="not-found__title">404
     </h1>
     <span className="not-found__message">
      Страница не найдена</span>
     <button 
     className="not-found__button button"
     onClick={hadleGoBack}>Назад</button>
    </main>
  )
}

export default NotFound;