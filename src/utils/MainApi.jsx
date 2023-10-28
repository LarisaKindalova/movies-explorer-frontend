import { BASE_URL } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject({
    status: res.status,
    message:`Ошибка: ${res.status}`});
}

export function register (data) {
  console.log(data);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => checkResponse(res));
}

export function login (data) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => checkResponse(res));
}

export function checkToken () {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }).then((res) => checkResponse(res));
};
  
export function updateUserInfo(user) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify(user),
  }).then((res) => checkResponse(res));
};

export function getMovies() {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }).then((res) => checkResponse(res));
};

export function saveMovies(movie) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify(movie)
  }).then((res) => checkResponse(res));
};

export function deleteMovies(movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }).then((res) => checkResponse(res));
};

export function logOut () {
  return fetch(`${BASE_URL}/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }).then(res => checkResponse(res));
};