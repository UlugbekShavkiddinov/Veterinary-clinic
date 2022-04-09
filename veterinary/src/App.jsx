import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom'



import './normalize.css'
import './App.scss';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/services';
import Article from './Pages/Article/Article';
import Faq from './Pages/FAQ/faq'
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Navigate to='/home' />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='article' element={<Article />} />
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
