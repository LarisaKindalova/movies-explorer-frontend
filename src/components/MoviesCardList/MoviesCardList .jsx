import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isToggleButton, displayButton }) {
  return (
    <section className="movies__section">
    <ul className="movies__list">
      {movies.map((movie, i) => (
        <MoviesCard 
        movie={movie} 
        key={i} 
        isToggleButton={isToggleButton}/>
      ))}
    </ul>
  {displayButton && (<button className="movies__button-more">Eще</button>)}
  </section>
  );
}

export default MoviesCardList;
