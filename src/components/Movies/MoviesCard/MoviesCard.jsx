import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {
  const [isToggleButton, setToggleButton] = React.useState(false)

  const toggleButton = () => {
    setToggleButton(!isToggleButton);
  };

  const location = useLocation();
  const savedFimls = location.pathname === "/saved-movies"; 

  return (
    <li className="movie__item">
      <img src={movie.img} alt={movie.name} className="movie__img" />
   
      {movie.isSaved && savedFimls ? (<button className="movie__delete-button button"></button>) :
      (<button className={`button ${!movie.isSaved && !isToggleButton ? "movie__save-button" : "movie__unsaved-button" }`}
      onClick={toggleButton}>{!movie.isSaved && !isToggleButton ? "Сохранить" : ""}</button>)}
      <div className="movie__description">
        <h2 className="movie__caption">{movie.name}</h2>
        <p className="movie__duration">{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
