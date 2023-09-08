import './App.css';
import React from "react";
import Header from "../Header/Header";
import Main from '../Main';
import Footer from '../Footer/Footer';
import Register from "../Register/Register";
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const location = useLocation();


  const pathLink = location.pathname === "/sign-up" ? "/sign-in" : "/sign-up";

  return (
    <div className="page">
      {!pathLink && 
      <Header 
      isLoggedIn= {true}/>}
      <Routes>
        <Route path="/sign-up" element = {<Register/>}/>
        <Route path="/sign-in" element = {<Login/>}/>
        <Route path="/" element = {<Main />}/>
        <Route path="*" element = {<NotFound/>}/>

      </Routes>
      {!pathLink &&  <Footer />}
      
    </div>
  );
}

export default App;
