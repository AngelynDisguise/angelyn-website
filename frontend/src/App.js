import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import Blog from './components/Blog.js';
import MyCat from './components/MyCat.js';


function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/MyCat" element={<MyCat />} />
      </Routes>
    </div>
  );
}

export default App;
