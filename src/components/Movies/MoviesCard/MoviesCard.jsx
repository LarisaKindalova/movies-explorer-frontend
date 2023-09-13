import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, isToggleButton = true}) {
  // const [isToggleButton, setToggleButton] = React.useState(false)
  // const isToggleButton = true;
  return (
    <li className="movie__item">
      <img src={movie.img} alt={movie.name} className="movie__img" />
      {!isToggleButton ? (
        <button className="movie__save-button button" type="button">
          Сохранить
        </button>
      ) : (
        <button className="movie__unsaved-button button" type="button"></button>
      )}
      <div className="movie__description">
        <h2 className="movie__caption">{movie.name}</h2>
        <p className="movie__duration">{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
