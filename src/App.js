import logo from './logo.svg';
// import './App.css';
// import Profile from './About';
import Home from './Home';
import Error from './pages/Error';


// import Contact from './Contact';
// import { useState } from 'react';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <React.StrictMode>
    <React.Fragment>
      {/* <h1>alskdfjasdf</h1> */}

      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='*' element={<Error/>}></Route>
            {/* <Route path='/Profile' element={<Profile/>}>About</Route> */}
            {/* <Route path='/Contact' element={<Contact/>}>Contact</Route> */}
         </Routes>
      </BrowserRouter>
      </React.Fragment>
      </React.StrictMode>
  );
}

export default App;
