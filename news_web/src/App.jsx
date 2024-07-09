import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import GenrePage from './Pages/GenrePage';
import LoginPage from './Pages/LoginPage';
import NewsPage from './Pages/NewsPage';
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/genre/:genre" element={<GenrePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App
