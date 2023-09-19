import { BASE_URL } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function register (name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Context-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({name, email, password}),
  }).then(res => checkResponse(res));
}