import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as mainApi from "../../utils/MainApi.jsx";
import { MOVIE_BASE_URL } from "../../utils/constants";
import { setLocalStorage, getLocalStorage } from "../../utils/movies";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "" });
  const [isloading, setIsloading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   isLoggedIn &&
  //     mainApi
  //       .checkToken()
  //       .then(user => {
  //         setCurrentUser(user);
  //       })
  //       .catch(err => console.log(`Ошибка: ${err}`));
  // }, [isLoggedIn]);

  React.useEffect(() => {
    checToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checToken() {
    setIsloading(true);
    mainApi
      .checkToken()
      .then(user => {
        setLoggedIn(true);
        setCurrentUser(user);
        navigate(location.pathname);
      })
      .catch(() => {
        setLoggedIn(false);
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleUpdateUser(name, email) {
    setCurrentUser(prevUser => ({
      ...prevUser,
      name,
      email,
    }));
  }

  function handleMovieSave(movie) {
    return mainApi
      .saveMovies({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIE_BASE_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIE_BASE_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then(newMovie => {
        setSavedMovies([newMovie, ...savedMovies]);
        setLocalStorage("savedMovies", [newMovie, ...savedMovies]);
      })
      .catch(err => {
        console.error(err);
      });
  }

  function handleMovieDelete(movie) {
    let movieId = movie._id;
    if (!movieId && savedMovies.length > 0) {
      const foundMovie = savedMovies.find(m => m.movieId === movie.id);
      if (foundMovie) {
        movieId = foundMovie._id;
      }
    }
    if (movieId) {
      const savedMoviesLocalStorage = getLocalStorage("savedMovies") || [];
      mainApi
        .deleteMovies(movieId)
        .then(() => {
          setSavedMovies(savedMovies.filter(item => item._id !== movie._id));
          setLocalStorage(
            "savedMovies",
            savedMoviesLocalStorage.filter(m => m._id !== movieId)
          );
        })
        .catch(err => console.log(`Ошибка: ${err}`));
    }
  }

  const pathFooter =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";
  const pathHeader =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  return (
    <div className="page">
      {isloading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          {pathHeader ? <Header isLoggedIn={isLoggedIn} /> : ""}
          <Routes>
            <Route
              path="/signup"
              element={
                <Register isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
              }
            />
            <Route
              path="/signin"
              element={
                <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
              }
            />
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route path="*" element={<NotFound isLoggedIn={isLoggedIn} />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  setLoggedIn={setLoggedIn}
                  setCurrentUser={setCurrentUser}
                  isLoggedIn={isLoggedIn}
                  setIsloading={setIsloading}
                  handleUpdateUser={handleUpdateUser}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  saveMovie={handleMovieSave}
                  deleteMovie={handleMovieDelete}
                  savedMovies ={savedMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  deleteMovie={handleMovieDelete}
                />
              }
            />
          </Routes>
          {pathFooter ? <Footer /> : ""}
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
