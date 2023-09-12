import './App.css';
import React from "react";
import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from "../Register/Register";
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from "../Movies/Movies";
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const location = useLocation();


  const pathLink = location.pathname === "/signup" || location.pathname === "/signin";

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/signup" element = {<Register/>}/>
        <Route path="/signin" element = {<Login/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/" element = {<Main />}/>
        <Route path="/movies" element= {<Movies/>}/>
        <Route path="*" element = {<NotFound/>}/>

      </Routes>
      {!pathLink ? (<Footer />) : ("")}
      
    </div>
  );
}

export default App;
