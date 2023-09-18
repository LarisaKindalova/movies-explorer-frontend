import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList ";
import { movie } from "../../utils/constants";

function SavedMovies() {

  const savedMovies = movie.filter((movie) => movie.isSaved)
  return (
    <main className="saved-movies">
      <SearchForm />
    <MoviesCardList 
    movies={savedMovies}
    displayButton={false}
 />
    </main>
  )
}

export default SavedMovies;