import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

import {
  SCREEN_SIZE_DESKTOP,
  SCREEN_SIZE_TABLET,
  // SCREEN_SIZE_MOBILE,
  MOVIES_ADD_MOBILE,
  MOVIES_ADD_TABLET,
  MOVIES_ADD_DESKTOP,
  MOVIES_DESKTOP,
  MOVIES_TABLET,
  MOVIES_MOBILE,
} from "../../utils/constants";

function MoviesCardList({ movies, saveMovie, deleteMovie, error, savedMovies }) {
  const [displayedMovies, setDisplayedMovies] = React.useState(0);
  const [moreMovies, setMoreMovies] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const location  = useLocation();
  const currentPath = location.pathname;

  React.useEffect(() => {
    if (screenWidth >= SCREEN_SIZE_DESKTOP) {
      setDisplayedMovies(MOVIES_DESKTOP);
      setMoreMovies(MOVIES_ADD_DESKTOP);
    } else if (screenWidth >= SCREEN_SIZE_TABLET && screenWidth <= SCREEN_SIZE_DESKTOP) {
      setDisplayedMovies(MOVIES_TABLET);
      setMoreMovies(MOVIES_ADD_TABLET);
    } else if (screenWidth < SCREEN_SIZE_TABLET) {
      setDisplayedMovies(MOVIES_MOBILE);
      setMoreMovies(MOVIES_ADD_MOBILE);
    }

    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [movies, screenWidth, setScreenWidth]);

  function showMoreMovies() {
    setDisplayedMovies(displayedMovies + moreMovies);
  }

  return (
    <section className="movies__section">
      <ul className="movies__list">
        {
          movies.slice(0, displayedMovies).map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            savedMovies ={savedMovies}
          />
          ))
        }
      </ul>
      <span className="search__error">{error}</span>
      {currentPath === "/movies" && displayedMovies < movies.length && (
        <button className="movies__button-more" 
        onClick={showMoreMovies}>
          Eще
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
