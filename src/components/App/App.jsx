import './App.css';
import React from "react";
import Header from "../Header/Header";
import Main from '../Main';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element= {<Main />}/>

      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
