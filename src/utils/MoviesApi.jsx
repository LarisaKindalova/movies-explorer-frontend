import { MOVIE_BASE_URL } from "./constants";

function checkMovieResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject({
    status: res.status,
    message:`Ошибка: ${res.status}`});
}


export function getAllMovies() {
  return fetch (`${MOVIE_BASE_URL}/beatfilm-movies`, {
    method: "GET",
   headers: {
    "Content-type": "application/json",
   },
  }).then((res) => checkMovieResponse(res));
}