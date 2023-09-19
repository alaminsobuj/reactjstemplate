import logo from './logo.svg';
// import './App.css';
// import Profile from './About';
import Home from './Home';
// import Contact from './Contact';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <h1>alskdfjasdf</h1> */}
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            {/* <Route path='/Profile' element={<Profile/>}>About</Route> */}
            {/* <Route path='/Contact' element={<Contact/>}>Contact</Route> */}
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
