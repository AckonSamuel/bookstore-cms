import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/NavBar';
import Categories from './components/Categories';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
