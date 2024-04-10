import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { MOVIE_BASE_URL } from "../../utils/constants";

function MoviesCard({ movie, saveMovie, deleteMovie, savedMovies}) {
  const [isSaved, setSaved] = React.useState(movie.isSaved);

  
  
  function handleClick() {
    setSaved(!isSaved);
  }

  function handleSaveMovie() {
    handleClick();
    saveMovie(movie);
  }
  
  function handleDeleteMovie() {
    handleClick();
    deleteMovie(movie);
  }

  const location = useLocation();
  const savedFimls = location.pathname === "/saved-movies";

  function movieDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + "ч" : "0ч"} ${
      minutes > 0 ? minutes + "м" : "0м"
    }`;
  }

  return (
    <li className="movies__item">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={movie.image.url ? `${MOVIE_BASE_URL}${movie.image.url}` : movie.image}
          alt={movie.nameRU}
          className="movies__img"
        />
      </a>
      {savedFimls ? (
        <button
          className="movies__delete-button button"
          onClick={handleDeleteMovie}
        ></button>
      ) : (
        <button
          className={`button ${
            !isSaved ? "movies__save-button" : "movies__unsaved-button"
          }`}
          onClick={isSaved ? handleDeleteMovie : handleSaveMovie}
        >
          {!isSaved ? "Сохранить" : ""}
        </button>
      )}
      <div className="movies__description">
        <h2 className="movies__caption">{movie.nameRU}</h2>
        <p className="movies__duration">{movieDuration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
