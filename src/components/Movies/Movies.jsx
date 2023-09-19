import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList ";
import { movie } from "../../utils/constants";

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={movie} 
      displayButton = {true}/>
    </main>
  );
}

export default Movies;
