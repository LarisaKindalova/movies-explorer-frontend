import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList ";
import Preloader from "../Preloader/Preloader";
import * as mainApi from "../../utils/MainApi.jsx";
import { MESSAGE_ERROR_NOT_FOUND } from "../../utils/constants";
import {
  filteredMovieskeyword,
  filteredShortMovies,
  setLocalStorage,
  getLocalStorage,
} from "../../utils/moviesUtils";

function SavedMovies({savedMovies, setSavedMovies, deleteMovie}) {
  const [searchQuery, setSearchQuery] = React.useState(
    localStorage.getItem("search") || ""
  );
  const [isChecked, setChecked] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
   const savedMoviesLocalStorage = getLocalStorage("savedMovies") || [];

  React.useEffect(() => {
    setIsLoading(true);
    mainApi
      .getMovies()
      .then((movies) => {
        setSavedMovies(movies.reverse());
        setLocalStorage("savedMovies", movies);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setSavedMovies]);


  
  function handleMoviesSearch(searchQuery) {
    const moviesFilteredKeyword = filteredMovieskeyword(savedMoviesLocalStorage, searchQuery.trim()
    );
    const filterMoviesSearch = filteredShortMovies(moviesFilteredKeyword, isChecked);
    setSavedMovies(filterMoviesSearch);
    if (filterMoviesSearch.length === 0) {
      setError(MESSAGE_ERROR_NOT_FOUND);
    } else {
      setError("");
    }
  }

  function handleCheckbox(isChecked) {
    const moviesFilteredKeyword = filteredMovieskeyword(savedMoviesLocalStorage, searchQuery.trim()
    );
    const filterMoviesSearch = filteredShortMovies(moviesFilteredKeyword, isChecked);
    setSavedMovies(filterMoviesSearch);
    if (filterMoviesSearch.length === 0) {
      setError(MESSAGE_ERROR_NOT_FOUND);
    } else {
      setError("");
    }
  }

  return (
    <main className="saved-movies">
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleMoviesSearch}
        onCheckboxChange={handleCheckbox}
        isChecked={isChecked}
        setChecked={setChecked}
      />
      {isLoading ? (
        <Preloader />
        ) : (
      <MoviesCardList
        movies={savedMovies}
        deleteMovie={deleteMovie}
        isLoading={isLoading}
        error={error}
        displayButton={false}
      />)}
    </main>
  );
}

export default SavedMovies;
