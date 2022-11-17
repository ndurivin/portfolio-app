import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/works" element={<Works />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/contacts" element={<Contact />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
