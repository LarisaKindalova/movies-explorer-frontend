
import { SHORT_MOVIE_DURATION } from "../utils/constants";

export const filteredMovieskeyword = (movies, keyword) =>
  movies.filter((movie) =>
    [movie.nameRU, movie.nameEN].some((name) =>
      name.toLowerCase().includes(keyword.toLowerCase())
    )
  );

export const filteredShortMovies = (movies, isChecked) => {
  if (isChecked) {
    return movies.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION);
  }
  return movies;
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};