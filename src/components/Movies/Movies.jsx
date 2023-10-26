import React from "react";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList ";
import * as moviesApi from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";
import {
  MESSAGE_ERROR_NOT_FOUND,
  MESSAGE_ERROR_SERVER,
} from "../../utils/constants";
import {
  filteredMovieskeyword,
  filteredShortMovies,
  setLocalStorage,
  getLocalStorage,
} from "../../utils/moviesUtils";

function Movies({ saveMovie, deleteMovie }) {
  const [searchQuery, setSearchQuery] = React.useState(
    localStorage.getItem("search") || ""
  );
  const [allMovies, setAllMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(allMovies);

  const [isChecked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  function checkMovieSaved (movie, savedMovies) {
    return savedMovies.find((savedMovies) => savedMovies.movieId === movie.id);
  };

  const isMovieSaved = filteredMovies.map((movie) => ({
    ...movie,
    isSaved: checkMovieSaved(movie, savedMovies),
  }));

 
  React.useEffect(() => {
    const localStorageSearch = getLocalStorage("filterMoviesSearch");
    const savedMoviesLocalStorage = getLocalStorage("savedMovies");
    setSavedMovies(savedMoviesLocalStorage);

    if (localStorageSearch) {
      setFilteredMovies(localStorageSearch.filterMoviesSearch);
      setSearchQuery(localStorageSearch.searchQuery.trim());
      setChecked(localStorageSearch.isChecked);
    } else {
      setFilteredMovies([]);
    }
  }, [setSavedMovies, isChecked]);

  async function handleMoviesSearch(searchQuery) {
    setIsLoading(true);
    try {
      const allMoviesLocalStorage = JSON.parse(localStorage.getItem("allMovies"));
      if (allMoviesLocalStorage) {
        const moviesFilteredKeyword = filteredMovieskeyword(allMoviesLocalStorage, searchQuery.trim()
        );
        const filterMoviesSearch = filteredShortMovies(moviesFilteredKeyword, isChecked);
        setLocalStorage("filterMoviesSearch", {
          filterMoviesSearch, searchQuery, isChecked 
        });
        setFilteredMovies(filterMoviesSearch);
        if (filterMoviesSearch.length === 0) {
          setError(MESSAGE_ERROR_NOT_FOUND);
        } else {
          setError("");
        }
      } else {
        const [data, saved] = await Promise.all([
          moviesApi.getAllMovies(),
          mainApi.getMovies(),
        ]);
        setSavedMovies(saved);
        setAllMovies(data);
        setLocalStorage("savedMovies", saved);
        setLocalStorage("allMovies", data);
        const moviesFilteredKeyword = filteredMovieskeyword(data, searchQuery.trim());
        const filterMoviesSearch= filteredShortMovies(moviesFilteredKeyword, isChecked);
        setLocalStorage("filterMoviesSearch", {filterMoviesSearch, searchQuery, isChecked });
        setFilteredMovies(filterMoviesSearch);
        if (filterMoviesSearch.length === 0) {
          setError(MESSAGE_ERROR_NOT_FOUND);
        } else {
          setError("");
        }
      }
    } catch (error) {
      setError(MESSAGE_ERROR_SERVER);
    } finally {
      setIsLoading(false);
    }
  }

  function handleShortMoviesSearch(isChecked) {
    const allMoviesLocalStorage = getLocalStorage("allMovies");
    if (allMoviesLocalStorage) {
      const moviesFilteredKeyword = filteredMovieskeyword(allMoviesLocalStorage, searchQuery.trim());
      const filterMoviesSearch= filteredShortMovies(moviesFilteredKeyword, isChecked);
      setFilteredMovies(filterMoviesSearch);
      setLocalStorage('filterMoviesSearch', { filterMoviesSearch, searchQuery, isChecked });
      if (filterMoviesSearch.length === 0) {
        setError(MESSAGE_ERROR_NOT_FOUND);
      } else {
        setError('');
      }
    }
  }

  return (
    <main className="movies">
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleMoviesSearch}
        onCheckboxChange={handleShortMoviesSearch}
        isChecked={isChecked}
        setChecked ={setChecked}
        />
      {isLoading ? (
        <Preloader />
        ) : (
          <MoviesCardList
          movies={isMovieSaved}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          savedMovies={savedMovies}
          error={error}
           />
      )}
    </main>
  );
}

export default Movies;
