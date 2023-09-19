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
import { CurrentUserContext } from "../context/currentUserContext";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isloading, setIsloading] = React.userState(false)
  const location = useLocation();

  // const pathLink = location.pathname === "/signup" || location.pathname === "/signin";
  // const pathProfile = location.pathname === "/profile";
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
        {isloading ? (<Preloader/>) : (
        <CurrentUserContext.Provider value={currentUser}>
        {pathHeader ? <Header /> : ""}
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
            }
          />
        </Routes>
        {pathFooter ? <Footer /> : ""}
        </CurrentUserContext.Provider>)}
      </div>
  );
}

export default App;
