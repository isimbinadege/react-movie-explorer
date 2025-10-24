import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';
function App(){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/Favorites" element={<Favorites/>}/>
                </Routes>
                <Footer/>
    </Router>
  )
} 

export default App