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
    <li className="movies__item">
      <img src={movie.img} alt={movie.name} className="movies__img" />
   
      {movie.isSaved && savedFimls ? (<button className="movies__delete-button button"></button>) :
      (<button className={`button ${!movie.isSaved && !isToggleButton ? "movies__save-button" : "movies__unsaved-button" }`}
      onClick={toggleButton}>{!movie.isSaved && !isToggleButton ? "Сохранить" : ""}</button>)}
      <div className="movies__description">
        <h2 className="movies__caption">{movie.name}</h2>
        <p className="movies__duration">{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
