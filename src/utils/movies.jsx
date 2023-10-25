
export const filteredMovieskeyword = (movies, keyword) =>
  movies.filter((movie) =>
    [movie.nameRU, movie.nameEN].some((name) =>
      name.toLowerCase().includes(keyword.toLowerCase())
    )
  );

export const filteredShortMovies = (movies, isChecked) => {
  if (isChecked) {
    return movies.filter((movie) => movie.duration <= 40);
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