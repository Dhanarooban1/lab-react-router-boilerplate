import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Contact from './Page/Contact';
import About from './Page/About';
function App() {
  return (
    <BrowserRouter>
      <>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li> 
          <li>  
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
